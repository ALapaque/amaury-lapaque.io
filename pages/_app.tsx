import type {AppProps} from 'next/app';
import Head from 'next/head';
import {RecoilRoot} from 'recoil';
import useEventTracker from '../hooks/useEventTracker';
import '../styles/globals.css';
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {
	useEventTracker();

	const unregister = () => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.getRegistrations().then((registrations: ReadonlyArray<ServiceWorkerRegistration>) => {
				registrations.forEach((registration: ServiceWorkerRegistration) => void registration.unregister())
			})
		}
	}

	useEffect(() => {
		unregister()
	}, [])

	return (
		<>
			<Head>
				<meta name="google"
							content="nositelinkssearchbox"/>
				<meta name="google"
							content="nopagereadaloud"/>
				<meta name="viewport"
							content="width=device-width, initial-scale=1"/>
				<meta name="google-site-verification"
							content="bXCbkD-6EYFXtLD8Ol4rXdaE88T5KXHbwyWaTmxi6JM"/>
				<meta name="description"
							content="Amaury Lapaque, Fullstack developer specialized in frontend technologies, feel free to contact me"/>
			</Head>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	);
}

export default MyApp;
