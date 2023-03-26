import React, {useEffect, useState} from 'react';
import MultiPageLayout from '../components/layout/MultiPageLayout';
import SinglePageLayout from '../components/layout/SinglePageLayout';
import AboutSection from '../components/sections/about';
import ContactSection from '../components/sections/contact';
import HeroSection from '../components/sections/hero';
import ProjectSection from '../components/sections/projects';
import ServiceSection from '../components/sections/service';
import SkillSection from '../components/sections/skills';
import TestimonialsSection from '../components/sections/testimonials';
import WorkExperienceSection from '../components/sections/work-experience';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import {GetServerSideProps, getServerSidePropsUtils} from '../utils/GetServerSidePropsUtils';
import Loading from "../components/Loading";

const Home = () => {
	const [props, setProps] = useState<GetServerSideProps | undefined>()

	useUnderMaintenance(props?.pageInfo);

	useEffect(() => {
		getServerSidePropsUtils().then((value: { props: GetServerSideProps }) => {
			if (!value?.props) {
				return
			}

			setTimeout(() => {
				setProps(value.props)
			}, 500)
		})
	}, [])

	if (!props) {
		return <Loading/>
	}

	if (props?.pageInfo?.useSinglePage) {
		return (
			<SinglePageLayout {...props}>
				<HeroSection/>
				<AboutSection/>
				<WorkExperienceSection/>
				<ServiceSection/>
				<ProjectSection/>
				<SkillSection/>
				<TestimonialsSection/>
				<ContactSection/>
			</SinglePageLayout>
		);
	}

	return (
		<MultiPageLayout {...props} pageTitle={'HOME'}>
			<HeroSection/>
		</MultiPageLayout>
	);
};

export default Home
