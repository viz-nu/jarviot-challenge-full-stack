
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { google } from "googleapis"
import config from 'config';
import "./dbConnect.js"
import users from "./models/userTokens.js"
const { client_id, client_secret, redirect_uris } = config.get("SECRET_KEYS")


const app = express();

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const SCOPE = ['https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file']

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    if (!req.body.code) return res.status(400).send("invalid Request");
    try {
        const token = await oAuth2Client.getToken(req.body.code)
        if (!token) return res.status(400).send("Token not found");
        oAuth2Client.setCredentials(token.tokens);
        // getting userDetails
        const oauth2 = google.oauth2({ version: "v2", auth: oAuth2Client });
        const response = await oauth2.userinfo.get()
        const { name, picture, id} = response.data  
        // updating DB
        var user = await users.findOne({ id: id })
        if(!user){
            var user = new users({ id:id, name:name, picture:picture, tokens: token.tokens });
            await user.save();
        }
        if (new Date(user.tokens.expiry_date) < new Date()) { user.tokens = token.tokens; await user.save(); }


        // accessing files in Gdirve
        const drive = google.drive({ version: 'v3', auth: oAuth2Client });
        const { data } = await drive.files.list({
            pageSize:150,
            fields: 'files(iconLink,webViewLink,name,quotaBytesUsed,permissions,owners,shared,originalFilename)',

        });
        const { files } = data;
        res.status(200).json({ files: files, user: {id:user.id,name:user.name} });

    } catch (error) {
        return res.status(400).send(error);
    }
});
app.get('/getAuthURL', (req, res) => {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPE,
        prompt: 'consent'
    });
    return res.send(authUrl);
});

app.post('/revokeAccess',async (req, res) => {
    var user = await users.findOne({ id: req.body.id })
    if(user){await user.deleteOne()
      return  res.send({ message: "Revoked successfully" })
    }
    res.send({ message: "User not found" })
    
});



const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started ${PORT}`));
