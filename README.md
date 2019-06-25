# Zing Vuejs Template

Here to make it easy to deploy VueJs projects.

## Implements

|TECH|STACK|
|:---:|:---:|:---:|:---:|
|HTML|CSS|Javascript|Bootstrap|
|VueJs|VueX|Vue Router|Bootstrap-Vue|

## Installation

- Directory Installation
```sh
git clone https://github.com/Divinityfound/zing-vuejs-default.git project_directory/
cd project_directory
npm install
npm run dev
```

- Creation of new virtual host, you may refer to the Virtualhost.example, or use the following configuration
```apache
#########################
###### SSL Enabled ######
#########################

<VirtualHost *:443>
	ServerName yourdomainname.com
	ServerAlias www.yourdomainname.com
		SSLEngine on
		SSLCertificateFile /YOUR_CERTIFICATE_FILE_DIRECTORY/cloudflare.com.pem
		SSLCertificateKeyFile /YOUR_CERTIFICATE_KEY_DIRECTORY/your_generated_key.key
		SSLCertificateChainFile /YOUR_CERTIFICATE_CHAINFILE_DIRECTORY/cloudflare.rsa.pem
	ServerAdmin example@yourdomainname.com
	DocumentRoot /YOUR_DIRECTORY/dist/public
	ErrorLog /YOUR_ERROR_DIRECTORY/YOUR_DIRECTORY.error.log
	CustomLog /YOUR_CUSTOM_LOG//YOUR_DIRECTORY.access.log combined
</VirtualHost>


<VirtualHost *:80>
	ServerName yourdomainname.com
	Redirect permanent / https://yourdomainname.com/
</VirtualHost>

#########################
###### SSL Disabled #####
#########################

<VirtualHost *:80>
	ServerName yourdomainname.com
	ServerAlias www.yourdomainname.com
	ServerAdmin example@yourdomainname.com
	DocumentRoot /YOUR_DIRECTORY/dist/public
	ErrorLog /YOUR_ERROR_DIRECTORY/YOUR_DIRECTORY.error.log
	CustomLog /YOUR_CUSTOM_LOG//YOUR_DIRECTORY.access.log combined
</VirtualHost>
```

## Example of default deployment

[https://vue.mathisonprojects.com](https://vue.mathisonprojects.com)

## Sites leveraging this project

Coming soon...

### Needs to be built out

- Installation Script
- Gallery
- Pricing
- Purchase
- SQL DB Structure

### In Progress

- Shop
- Cart
- Forum

### Ideas to ponder
- Maybe mongodb?
