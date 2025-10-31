Consent Manager Installation Instructions

1. Extract the contents of this zip file
2. Place the files in your website directory
3. Add the following code to your HTML page, inside the <head> tag:

<link rel="stylesheet" id="silktide-consent-manager-css" href="path-to-css/silktide-consent-manager.css">
<script src="path-to-js/silktide-consent-manager.js"></script>
<script>
silktideCookieBannerManager.updateCookieBannerConfig({
  background: {
    showBackground: false
  },
  cookieIcon: {
    position: "bottomRight"
  },
  cookieTypes: [
    {
      id: "n_dvendige",
      name: "Nødvendige",
      description: "<p>Nødvendig for at siden skal fungere/vises og at systemet får beskjed om at du ønsker å være privat</p>",
      required: true,
      onAccept: function() {
        console.log('Add logic for the required Nødvendige here');
      }
    },
    {
      id: "google_analytics",
      name: "Google Analytics",
      description: "<p>Dette er informasjon som hjelper oss forbedre nettsiden ved å spore hvordan brukerne navigerer rundt på siden. Det kan være klikk, scroll eller trykke inn på side.</p>",
      required: false,
      onAccept: function() {
        gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
        dataLayer.push({
          'event': 'consent_accepted_google_analytics',
        });
      },
      onReject: function() {
        gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
      }
    },
    {
      id: "markedsf_ring",
      name: "Markedsføring",
      description: "Innhenting av informasjon til digital markedsføring som Meta/Facebook/Instagram. Dette kan gjøre at du for eksempel ser reklame av oss på nettet etter du har forlatt siden vår.&nbsp;",
      required: false,
      onAccept: function() {
        gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
        dataLayer.push({
          'event': 'consent_accepted_markedsf_ring',
        });
      },
      onReject: function() {
        gtag('consent', 'update', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
        });
      }
    }
  ],
  text: {
    banner: {
      description: "<p>Vi bruker Cookies for å kunne forbedre brukeropplevelsen av nettsiden, skreddersy personlig innhold og til å analysere trafikk på siden.&nbsp;<a href=\"https://www.kodera.no/#/personvern\" target=\"_blank\">Les mer.</a></p>",
      acceptAllButtonText: "Aksepter alle",
      acceptAllButtonAccessibleLabel: "Aksepter alle cookies",
      rejectNonEssentialButtonText: "Kun nødvendige",
      rejectNonEssentialButtonAccessibleLabel: "Kun nødvendige cookies",
      preferencesButtonText: "Vis preferanser",
      preferencesButtonAccessibleLabel: "Vis preferanser"
    },
    preferences: {
      title: "Personaliser dine cookie preferanser",
      description: "<p>Vi respekterer din rett til å være privat. Du velger fritt selv hvilke cookies som er tillatt. Ditt valg vil være gjeldene for hele nettsiden.&nbsp;</p>",
      creditLinkText: "Dette banneret er fra SilkTide.com",
      creditLinkAccessibleLabel: "Få ditt eget banner fra SilkTide gratis"
    }
  }
});
</script>
