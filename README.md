# Insomnia Plugin for Ethos Access Token

An insomnia plugin to generate the access token for Ellucian Ethos before every call on Insomnia.

## Installation

#### One-Click installation

1. Go to http://insomnia.rest/plugins/insomnia-plugin-ethos-access-token
2. Click the **"Install plugin"** button.
3. Click **"Open Insomnia"** and **"Install"**

#### Install from plugins tab

1. Open Insomnia
2. Go to Application > Preferences > Plugins
3. Enter `insomnia-plugin-ethos-access-token`
4. Click **"Install Plugin"**

#### Manual installation

1. Open Insomnia plugins folder on a terminal window
2. `git clone https://github.com/rromanv/insomnia-plugin-ethos-access-token`
3. `cd insomnia-plugin-get-access-token`
4. `npm install`

#### Usage

- Create a new Request
- On Authentication tab, Bearer, select "Ethos Access Token"

  ![Ethos Access Token Function](/assets/ethos-access-token-function.png)

- Open and fill with your app secret

  ![Ethos Access Token Settings](/assets/ethos-access-token-settings.png)

- Done, make a call to Ethos and it will authenticate first every time
