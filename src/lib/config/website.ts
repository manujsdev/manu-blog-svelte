type WebsiteType = {
	author: string;
	siteLanguage: string;
	siteTitle: string;
	siteShortTitle: string; // used as SchemaOrg siteTitleAlt
	telegramUsername: string;
	githubPage: string;
	twitterUsername: string;
	siteUrl: string;
	contactEmail: string;
	linkedinProfile: string;
};

const website: WebsiteType = {
	author: 'Manu',
	siteLanguage: 'en_US',
	siteTitle: 'Manu`s website',
	siteShortTitle: 'Manu`s SEO',
	telegramUsername: import.meta.env.VITE_TELEGRAM_USERNAME,
	githubPage: import.meta.env.VITE_GITHUB_PAGE,
	twitterUsername: import.meta.env.VITE_TWITTER_USERNAME,
	siteUrl: import.meta.env.VITE_SITE_URL,
	contactEmail: import.meta.env.VITE_CONTACT_EMAIL,
	linkedinProfile: import.meta.env.VITE_LINKEDIN_PROFILE
};

export default website;
