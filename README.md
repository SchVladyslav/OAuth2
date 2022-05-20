Configure OAuth2

You will need to register your application with OAuth2 in order to start authenticating users.
Go to the Applications screen in the OAuth2 dashboard, create a new Regular Web Application, and follow the steps below.

1. Configure Callback URL
A callback URL is an application route where Auth0 redirects users after they have authenticated. This URL must be registered with Auth0 or else users will be unable to log in to the application and will get a "Callback URL mismatch" error.

The callback URL for the application created in this quickstart is http://localhost:3000/callback. Paste that in the Allowed Callback URLs field for the application you just created.

2. Get Your Application Keys
Finally, copy the following fields for your application for use in step 7:

Domain
Client ID

3. Install Dependencies
Your application will need the OAuth-connect package which is an OAuth-maintained library for Express.