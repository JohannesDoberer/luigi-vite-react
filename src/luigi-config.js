export const luigiConfig = {
    navigation: {
        nodes: [{
            pathSegment: 'home',
            label: '_',
            hideFromNav: true,
            children: [{
                pathSegment: 'overview',
                label: 'Overview',
                icon: 'home',
                viewUrl: 'https://fiddle.luigi-project.io/examples/microfrontends/multipurpose.html',
                loadingIndicator: {
                    enabled: false
                },
                context: {
                    title: 'Welcome to Luigi Vite!',
                    content: 'welcome to luigi vite'
                }
            }, {
                pathSegment: 'empty',
                label: 'Empty Page',
                category: {
                    label: 'My Category',
                    icon: 'dimension',
                    collapsible: true
                },
                loadingIndicator: {
                    enabled: false
                },
                viewUrl: 'https://fiddle.luigi-project.io/examples/microfrontends/fundamental/empty-demo-page.html'
            },
            {
                pathSegment: 'welcome',
                label: 'Welcome',
                category: {
                    label: 'My Category',
                    icon: 'dimension',
                    collapsible: true
                },
                loadingIndicator: {
                    enabled: false
                },
                viewUrl: './welcome'
            }]
        }]
    },
    routing: {
        useHashRouting: true
    },
    settings: {
        responsiveNavigation: 'Fiori3',
        header: {
            title: 'Luigi Vue Vite'
        }
    }
}