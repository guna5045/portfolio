/**
 * Production Analytics & Telemetry Layer
 * Compatible with Google Analytics 4 (GA4), Vercel Analytics, or custom telemetry APIs.
 */

export const trackEvent = (eventName, eventParams = {}) => {
  try {
    // 1. Google Analytics (gtag) hook
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }

    // 2. Vercel Analytics hook
    if (typeof window !== 'undefined' && typeof window.va === 'function') {
      window.va('track', eventName, eventParams);
    }

    // 3. Debug logging in development mode
    if (import.meta.env?.DEV) {
      console.log(`[Analytics Telemetry] Event: "${eventName}"`, eventParams);
    }
  } catch (err) {
    console.warn('[Analytics Error]', err);
  }
};

export const trackResumeDownload = (source = 'button') => {
  trackEvent('resume_download', {
    category: 'Conversion',
    label: 'Gunashekhar_Resume.pdf',
    trigger_source: source
  });
};

export const trackProjectView = (projectId) => {
  trackEvent('project_view_case_study', {
    category: 'Engineering Case Study',
    project_id: projectId
  });
};

export const trackSocialClick = (platform, url) => {
  trackEvent('social_link_click', {
    category: 'Engagement',
    platform: platform,
    destination: url
  });
};

export const trackContactSubmit = (subject) => {
  trackEvent('contact_form_submission', {
    category: 'Lead',
    subject: subject
  });
};
