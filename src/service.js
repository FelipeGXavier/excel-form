const { google } = require("googleapis");

module.exports = async function insertRow(data) {
    const auth = new google.auth.GoogleAuth({
        keyFile: "src/keys.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const authClientObject = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClientObject });
    const spreadsheetId = "";

    sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: 'A1',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [
                data
            ],
        },
    }, (err, response) => {
        if (err) return console.error(err)
    })

}
