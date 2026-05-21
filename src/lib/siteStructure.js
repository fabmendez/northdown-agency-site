export const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/services', label: 'Services' },
	{ href: '/about', label: 'About' },
	{ href: '/process', label: 'Process' },
	{ href: '/resources', label: 'Resources' },
	{ href: '/contact', label: 'Contact' },
	{ href: '/privacy', label: 'Privacy' }
];

export const pages = {
	home: {
		title: 'Home',
		description: 'Placeholder structure for the approved Home route.',
		primaryAction: 'Start a discovery conversation',
		sections: [
			'Business identity and offer summary',
			'Operational problems',
			'Service overview',
			'Process summary',
			'Trust and safety principles',
			'Contact path'
		],
		notes: ['Source: project-brain/14-website/PAGE_REQUIREMENTS.md']
	},
	services: {
		title: 'Services',
		description: 'Placeholder structure for the approved Services route.',
		primaryAction: 'Request an operational review',
		sections: [
			'Service catalog overview',
			'AI Systems Audits',
			'Automation Workflows',
			'Internal Tools',
			'Knowledge Systems',
			'Agentic Engineering',
			'Operational AI Infrastructure',
			'Good-fit and poor-fit guidance',
			'Process and contact links'
		],
		notes: ['Source: project-brain/11-product/SERVICE_CATALOG.md']
	},
	about: {
		title: 'About',
		description: 'Placeholder structure for the approved About route.',
		primaryAction: 'See the process or contact Northdown',
		sections: [
			'Business orientation',
			'Who Northdown serves',
			'Working principles',
			'Trust signals',
			'Boundaries and responsible AI stance',
			'Contact path'
		],
		notes: ['Source: project-brain/13-brand/']
	},
	process: {
		title: 'Process',
		description: 'Placeholder structure for the approved Process route.',
		primaryAction: 'Start with discovery',
		sections: [
			'First contact',
			'Discovery',
			'Audit',
			'Proposal',
			'Delivery',
			'Validation',
			'Handoff',
			'Optimisation or retainer',
			'What clients need to provide'
		],
		notes: ['Source: project-brain/05-delivery/CLIENT_JOURNEY.md']
	},
	contact: {
		title: 'Contact',
		description: 'Placeholder structure for the approved Contact route.',
		primaryAction: 'Submit an enquiry or request discovery',
		sections: [
			'Contact method',
			'Intake guidance',
			'What to include',
			'What not to send yet',
			'Expected next step',
			'Privacy link'
		],
		notes: ['No contact form backend is implemented in this increment.']
	},
	resources: {
		title: 'Resources',
		description: 'Placeholder structure for the approved Resources route.',
		primaryAction: 'Move from learning to discovery',
		sections: [
			'Resource categories',
			'FAQs when approved',
			'Guides or notes when available',
			'Services and process links',
			'Contact path'
		],
		notes: ['Source: project-brain/14-website/CONTENT_INVENTORY.md']
	},
	privacy: {
		title: 'Privacy',
		description: 'Placeholder structure for the approved Privacy route.',
		primaryAction: 'Return to contact or services',
		sections: [
			'Information visitors may provide',
			'Sensitive information guidance',
			'Contact-form handling expectations',
			'Third-party or tooling note when approved',
			'Contact route for privacy questions'
		],
		notes: ['Final privacy content is not approved yet.']
	}
};
