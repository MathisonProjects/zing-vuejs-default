# Zing Vuejs Template

Here to make it easy to deploy VueJs projects.

## Implements

|TECH|STACK|FOR|PROJECT|
|:---:|:---:|:---:|:---:|
|HTML|CSS|Javascript|Bootstrap|
|VueJs|VueX|Vue Router|Bootstrap-Vue|

## Installation

```sh
git clone https://github.com/Divinityfound/zing-vuejs-default.git project_directory/
cd project_directory
chmod -R 777 ./install.sh
./install.sh
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

- .env Integration
- Knowledge Base
- Search
- SQL DB Structure
- Zing Data, Data Repository for all related sites

### In Progress

- Pricing - Template built out, but needs better presentation.
- Administration
- Shop - Filters
- Forum - Fixes needed, Pagination incorporation

### If you wish to know more about me...

Please give me a follow or subscribe in the following:

|Twitter|Github|Youtube|Twitch|Linkedin|Personal Site|
| ----- | ---- | ----- | ---- | ------ | ----------- |
|[MathisonProject](https://twitter.com/MathisonProject)|[Divinityfound](https://github.com/Divinityfound)|[Jacob Mathison](https://www.youtube.com/channel/UCNNxB1TRbdJxE_y51sJb9DA)|[MathisonProjects](http://twitch.tv/mathisonprojects)|[Jacob Mathison](https://www.linkedin.com/in/jacob-a-mathison-62359912/)|[Mathison Projects](http://mathisonprojects.com)|


### Plans for Frontend Framework
- Rebuild Personal Website to have an Owned Media Platform