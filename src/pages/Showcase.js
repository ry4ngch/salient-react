import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Button from '../utils/Salient/UI/Buttons/Button';
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Badge from '../utils/Salient/UI/Badge/Badge';
import Progress from '../utils/Salient/UI/Progress/Progress';
import Modal from '../utils/Salient/UI/Modal/Modal';
import Banner, {BannerContent} from '../utils/Salient/UI/Banner/Banner';

import styles from './Showcase.module.css';

const FEATURES = [
	{
		icon: 'fa-table',
		title: 'Data Tables',
		text: 'Sortable, paginated tables that wire themselves up — no manual state plumbing required.',
		link: '/tables'
	},
	{
		icon: 'fa-window-restore',
		title: 'Cards & Animations',
		text: 'Scale, flip, tilt and blur effects driven by a single animation prop.',
		link: '/cards'
	},
	{
		icon: 'fa-input-text',
		title: 'Form Controls',
		text: 'Text fields, numeric inputs, dropdowns, sliders and affixes with consistent styling.',
		link: '/formUIs'
	},
	{
		icon: 'fa-chart-simple',
		title: 'Charts & Progress',
		text: 'Bar charts and linear / circular progress steppers out of the box.',
		link: '/chart'
	},
	{
		icon: 'fa-layer-group',
		title: 'Navigation Kit',
		text: 'Navbars, sidebars, breadcrumbs, tabs, treeviews and timelines that stay in sync.',
		link: '/tabs'
	},
	{
		icon: 'fa-wand-magic-sparkles',
		title: 'Motion Built-in',
		text: 'Hover highlights, staggered reveals and modal transitions without custom state logic.',
		link: '/buttons'
	}
];

const BADGE_STATUSES = ['active', 'loading', 'pending', 'awaiting', 'stall', 'idle', 'cancel', 'disabled'];

const STEPS = ['Design', 'Build', 'Test', 'Ship'];

const Showcase = () => {
	const navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState(false);
	const [step, setStep] = useState(2);

	return (
		<div className={styles.showcase}>
			<section className={styles.hero}>
				<div className={styles.heroGlow}/>
				<div className={styles.heroEyebrow}>
					<FontAwesomeIcon icon="fa-bolt"/>
					Open-source React UI library
				</div>
				<h1 className={styles.heroTitle}>Salient</h1>
				<p className={styles.heroSubtitle}>
					Beautiful, animated components without the boilerplate. Buttons, tables, timelines,
					progress steppers and more — driven by props, not custom state logic.
				</p>
				<div className={styles.heroActions}>
					<Button type="button" buttonStyle="blueBlur" onClick={() => navigate('/buttons')}>Explore Components</Button>
					<Button type="button" buttonStyle="blur" onClick={() => navigate('/tables')}>See It In Action</Button>
				</div>
				<div className={styles.heroBadges}>
					{BADGE_STATUSES.map((status) => (
						<Badge key={status} text={status} status={status} hasIndicator={true}/>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Everything you need, nothing you don't</h2>
				<p className={styles.sectionLead}>25+ components, each demoable on this very site. Click through to see the source in motion.</p>
				<div className={styles.featureGrid}>
					{FEATURES.map((feature) => (
						<Card key={feature.title} className="bg-dark card-flat">
							<CardInfo>
								<CardContent>
									<div className={styles.featureCardInner}>
										<FontAwesomeIcon icon={`fa-${feature.icon}`} className={styles.featureIcon}/>
										<h3 className={styles.featureTitle}>{feature.title}</h3>
										<p className={styles.featureText}>{feature.text}</p>
										<button
											type="button"
											className={styles.featureLink}
											onClick={() => navigate(feature.link)}>
											View demo <FontAwesomeIcon icon="fa-arrow-right"/>
										</button>
									</div>
								</CardContent>
							</CardInfo>
						</Card>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Live playground</h2>
				<p className={styles.sectionLead}>These aren't screenshots — every control below is a live Salient component.</p>
				<div className={styles.playground}>
					<Card className="card-border">
						<CardInfo><CardTitle>Progress Stepper</CardTitle></CardInfo>
						<CardContent>
							<div className={styles.playgroundBlock}>
								<Progress
									progressItems={STEPS}
									currentProgressIndex={step}
									showProgressStep={true}
									theme="indigo"
								/>
								<div className={styles.heroActions}>
									<Button type="button" buttonStyle="blur" onClick={() => setStep((s) => Math.max(0, s - 1))}>Prev</Button>
									<Button type="button" buttonStyle="blur" onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}>Next</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="card-border">
						<CardInfo><CardTitle>Modals & Banners</CardTitle></CardInfo>
						<CardContent>
							<div className={styles.playgroundBlock}>
								<Button type="button" buttonStyle="blueBlur" onClick={() => setModalOpen(true)}>Open Modal</Button>
								<Banner theme="indigo" allowBannerDismiss={false}>
									<BannerContent>
										<FontAwesomeIcon icon="fa-circle-info" style={{marginRight: '10px'}}/>
										Banners render inline with theme support and dismiss handling.
									</BannerContent>
								</Banner>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			<section className={styles.cta}>
				<h2 className={styles.ctaTitle}>Start building with Salient today</h2>
				<p className={styles.ctaLead}>MIT licensed, zero config — get started with one command.</p>
				<div className={styles.installChip}>
					<FontAwesomeIcon icon="fa-terminal"/>
					npm install @ry4ngch/salient-react
				</div>
				<div className={styles.heroActions}>
					<Button type="button" buttonStyle="blueBlur" onClick={() => navigate('/buttons')}>Browse Buttons</Button>
					<Button type="button" buttonStyle="clear" onClick={() => navigate('/avatar')}>More Demos</Button>
				</div>
			</section>

			<Modal
				title="It's alive"
				showModal={modalOpen}
				className="light-theme"
				hasSections={false}
				onCloseModal={(e) => {e.preventDefault(); setModalOpen(false);}}
				onModalBlur={() => setModalOpen(false)}>
				<CardContent>
					<div className={styles.modalBody}>
						<span>
							Modals handle focus, blur-to-close and sectioned content for you.
							No portal wiring, no key listeners.
						</span>
						<Button type="button" buttonStyle="blueBlur" isBlock={true} onClick={() => setModalOpen(false)}>Nice.</Button>
					</div>
				</CardContent>
			</Modal>
		</div>
	);
};

export default Showcase;
