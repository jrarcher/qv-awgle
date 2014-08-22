import OAuthCustomAuthenticator from 'qv/authenticators/custom-auth';

export default {
    name: 'custom-auth',

    initialize: function(container) {
        container.register(
            'custom-auth:oauth2-password-grant',
            OAuthCustomAuthenticator);
    }
};