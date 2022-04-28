import React, { Fragment } from 'react';
import Image from 'next/image';
import Logo from '../images/logo.svg';
import Todo from '../images/icon-todo.svg';
import Calender from '../images/icon-calendar.svg';
import Reminders from '../images/icon-reminders.svg';
import Planning from '../images/icon-planning.svg';
import { Menu, Transition, Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function Introsection() {
	return (
		<div>
			<Disclosure as='nav' className='bg-white'>
				{({ open }) => (
					<>
						<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
							<div className='relative flex items-center justify-between h-16'>
								<div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
									{/* Mobile menu button*/}
									<Disclosure.Button
										className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset 
									focus:ring-white'>
										<span className='sr-only'>
											Open main menu
										</span>
										{open ? (
											<XIcon
												className='block h-6 w-6'
												aria-hidden='true'
											/>
										) : (
											<MenuIcon
												className='block h-6 w-6'
												aria-hidden='true'
											/>
										)}
									</Disclosure.Button>
								</div>
								{/*Laptop and Desktop view */}
								<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
									<div className='flex-shrink-0 flex items-center md:justify-start md:ml-0 -ml-60'>
										<Image
											src={Logo}
											alt='logo'
											width={72}
											height={25}
										/>
									</div>
									<div className='hidden sm:block sm:ml-6'>
										<div className='flex space-x-12 lg:flex-grow'>
											<Menu
												as='div'
												className='ml-3 relative'>
												<div>
													<Menu.Button className='flex'>
														<a
															// href='/features'
															className='block mt-4 md:text-xs md:inline-flex md:mt-0 md:ml-8 hover:text-black text-gray-400 
															lg:mr-0 mr-4'>
															Features
															<ChevronDownIcon
																className='-mr-1 ml-2 h-5 w-4 -mt-0.5'
																aria-hidden='true'
															/>
														</a>
													</Menu.Button>
												</div>

												<Menu.Items className='origin-top-right absolute right-0 mt-2 w-36 h-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
													<Menu.Item>
														{({ active }) => (
															<div
																className={classNames(
																	active
																		? 'bg-gray-100'
																		: '',
																	'flex px-2 py-1 text-gray-700 ml-2'
																)}>
																<Image
																	src={Todo}
																	alt='toDo'
																/>
																<a
																	href='/todolist'
																	className='-mt-0.5 ml-2'>
																	Todo List
																</a>
															</div>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<div
																className={classNames(
																	active
																		? 'bg-gray-100'
																		: '',
																	'flex px-2 py-1 text-gray-700 ml-2'
																)}>
																<Image
																	src={
																		Calender
																	}
																	alt='calender'
																/>
																<a
																	href='/calender'
																	className='-mt-0.5 ml-2'>
																	Calender
																</a>
															</div>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<div
																className={classNames(
																	active
																		? 'bg-gray-100'
																		: '',
																	'flex px-2 py-1 text-gray-700 ml-2'
																)}>
																<Image
																	src={
																		Reminders
																	}
																	alt='reminders'
																/>
																<a
																	href='/reminders'
																	className='-mt-0.5 ml-2'>
																	Reminders
																</a>
															</div>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<div
																className={classNames(
																	active
																		? 'bg-gray-100'
																		: '',
																	'flex px-2 py-1 text-gray-700 ml-2'
																)}>
																<Image
																	src={
																		Planning
																	}
																	alt='planning'
																/>
																<a
																	href='/planning'
																	className='-mt-0.5 ml-2'>
																	Planning
																</a>
															</div>
														)}
													</Menu.Item>
												</Menu.Items>
											</Menu>

											<Menu
												as='div'
												className='ml-3 relative'>
												<div>
													<Menu.Button className='flex'>
														<a className='block mt-4 lg:text-xs lg:inline-flex lg:mt-0 hover:text-black text-gray-400 lg:mr-2 mr-4'>
															Company
															<ChevronDownIcon
																className='-mr-1 ml-2 h-5 w-4 -mt-0.5'
																aria-hidden='true'
															/>
														</a>
													</Menu.Button>
												</div>
												<Menu.Items className='origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
													<Menu.Item>
														{({ active }) => (
															<a
																href='/history'
																className={classNames(
																	active
																		? 'bg-gray-100'
																		: '',
																	'block px-4 py-2 text-gray-700'
																)}>
																History
															</a>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<a
																href='/team'
																className={classNames(
																	active
																		? 'bg-gray-100'
																		: '',
																	'block px-4 py-2 text-sm text-gray-700'
																)}>
																Our Team
															</a>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<a
																href='/blog'
																className={classNames(
																	active
																		? 'bg-gray-100'
																		: '',
																	'block px-4 py-2 text-sm text-gray-700'
																)}>
																Blog
															</a>
														)}
													</Menu.Item>
												</Menu.Items>
											</Menu>
											<a
												href='/careers'
												className='block mt-4 lg:inline-block lg:text-xs lg:mt-0 hover:text-black text-gray-400 mr-4'>
												Careers
											</a>
											<a
												href='/about'
												className='block mt-4 lg:inline-block lg:text-xs lg:mt-0 hover:text-black text-gray-400 mr-4'>
												About
											</a>
										</div>
									</div>
								</div>

								{/* login and Register */}
								<div className='flex-0 flex items-center justify-end sm:items-stretch sm:justify-end'>
									<div className='hidden sm:flex sm:ml-6'>
										<a
											href='/login'
											className='flex mt-4 lg:inline-flex lg:mt-2 lg:text-xs hover:text-black text-gray-400 mr-4'>
											Login
										</a>

										<Menu
											as='div'
											className='ml-3 relative'>
											<div>
												<Menu.Button
													className='bg-white flex rounded-xl border-2 border-gray-400 hover:border-black 
												pl-4 py-2'>
													<a
														href='/register'
														className='block mt-4 lg:inline-block lg:mt-0 lg:text-xs hover:text-black text-gray-400 
														mr-4'>
														Register
													</a>
												</Menu.Button>
											</div>
										</Menu>
									</div>
								</div>
							</div>
						</div>

						{/* Mobile menu items */}
						<Disclosure.Panel className='fixed bottom-0 top-12 right-0 bg-white text-black w-8/12 z-20 shadow-2xl shadow-black'>
							<div className='px-2 pt-2 pb-3'>
								<Menu as='div' className='ml-3 '>
									<div>
										<Menu.Button className='flex'>
											<a
												href='#responsive-header'
												className='flex mt-4 md:inline-flex md:mt-0'>
												Features
												<ChevronDownIcon
													className='-mr-1 ml-2 h-5 w-5 mt-0.5'
													aria-hidden='true'
												/>
											</a>
										</Menu.Button>
									</div>
									{/* <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20'></Menu.Items> */}
									<Menu.Items>
										<Menu.Item>
											{({ active }) => (
												<div
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'flex px-2 py-2 text-gray-700 ml-2'
													)}>
													<Image
														src={Todo}
														alt='toDo'
													/>
													<a
														href='/todolist'
														className='-mt-0.5 ml-1'>
														Todo List
													</a>
												</div>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<div
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'flex px-2 py-2 text-gray-700 ml-2'
													)}>
													<Image
														src={Calender}
														alt='calender'
													/>
													<a
														href='/calender'
														className='-mt-0.5 ml-1'>
														Calender
													</a>
												</div>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<div
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'flex px-2 py-2 text-gray-700 ml-2'
													)}>
													<Image
														src={Reminders}
														alt='reminders'
													/>
													<a
														href='/reminders'
														className='-mt-0.5 ml-1'>
														Reminders
													</a>
												</div>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<div
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'flex px-2 py-2 text-gray-700 ml-2'
													)}>
													<Image
														src={Planning}
														alt='planning'
													/>
													<a
														href='/planning'
														className='-mt-0.5 ml-1'>
														Planning
													</a>
												</div>
											)}
										</Menu.Item>
									</Menu.Items>
								</Menu>
								<Menu as='div' className='ml-3 relative'>
									<div>
										<Menu.Button className='flex'>
											<a
												href='#responsive-header'
												className='flex mt-4 md:inline-flex md:mt-0'>
												Company
												<ChevronDownIcon
													className='-mr-1 ml-1 h-5 w-5 mt-0.5'
													aria-hidden='true'
												/>
											</a>
										</Menu.Button>
									</div>
									<Menu.Items>
										<Menu.Item>
											{({ active }) => (
												<a
													href='/history'
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'block px-4 py-2 text-gray-700'
													)}>
													History
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href='/team'
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'block px-4 py-2 text-sm text-gray-700'
													)}>
													Our Team
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href='/blog'
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'block px-4 py-2 text-sm text-gray-700'
													)}>
													Blog
												</a>
											)}
										</Menu.Item>
									</Menu.Items>
								</Menu>
								<Menu as='div' className='ml-3 relative'>
									<div>
										<Menu.Button className='flex'>
											<a
												href='#responsive-header'
												className='flex mt-4 md:inline-flex md:mt-0'>
												Careers
											</a>
										</Menu.Button>
									</div>
								</Menu>
								<Menu as='div' className='ml-3 relative'>
									<div>
										<Menu.Button className='flex'>
											<a
												href='#responsive-header'
												className='flex mt-4 md:inline-flex md:mt-0'>
												About
											</a>
										</Menu.Button>
									</div>
								</Menu>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			{/* Landing page Desktop view */}
			<section>
				<div className='container mx-auto block md:flex relative md:justify-between md:mt-14'>
					<div className='absolute text-center md:text-left md:ml-0 mt-80 md:inset-x-32 md:mt-12'>
						<h1 className='remote w-72 md:w-fit md:text-5xl md:font-bold mx-auto text-2xl pl-1 pr-1 font-bold md:mt-8 mt-12'>
							Make remote work
						</h1>
						<p className='team text-sm md:text-sm md:text-left md:text-gray-400 md:px-2 px-3 mt-4 text-gray-400'>
							Get your team in sync, no matter your location.
							Streamline processes, create team rituals, and watch
							productivity soar.
						</p>
						<button
							className='bg-black hover:bg-white hover:text-black hover:border hover:border-black 
						text-white md:mt-10 ml-2 py-2 px-4 rounded-xl mt-6'>
							Learn more
						</button>
						{/*Desktop view for client images */}
						<div className='md:pr-2 md:mt-24 mt-8 hidden md:flex'>
							<span className='mt-2'>
								<Image
									src='/client-databiz.svg'
									alt='databiz'
									width={100}
									height={50}
								/>
							</span>
							<span className='ml-3'>
								<Image
									src='/client-audiophile.svg'
									alt='audiophile'
									width={110}
									height={55}
								/>
							</span>
							<span className='mr-2 mt-2'>
								<Image
									src='/client-meet.svg'
									alt='meet'
									width={110}
									height={50}
								/>
							</span>
							<span className='ml-1 mt-2'>
								<Image
									src='/client-maker.svg'
									alt='maker'
									width={110}
									height={50}
								/>
							</span>
						</div>
						{/*Mobile view for client images*/}
						<div className='mt-8 flex md:hidden justify-evenly'>
							<span className='ml-3'>
								<Image
									src='/client-databiz.svg'
									alt='databiz'
									width={90}
									height={50}
									layout='fixed'
								/>
							</span>
							<span className='ml-4'>
								<Image
									src='/client-audiophile.svg'
									alt='audiophile'
									width={90}
									height={50}
									layout='fixed'
								/>
							</span>
							<span className='ml-2'>
								<Image
									src='/client-meet.svg'
									alt='meet'
									width={90}
									height={60}
								/>
							</span>
							<span className='ml-2'>
								<Image
									src='/client-maker.svg'
									alt='maker'
									width={85}
									height={60}
								/>
							</span>
						</div>
					</div>
					{/*Desktop view for hero image */}
					<div className='imageWrap hidden md:flex'>
						<Image
							src='/image-hero-desktop.png'
							alt='desktop'
							width={400}
							height={500}
						/>
					</div>
					{/*Mobile view for hero image */}
					<div className='imageWrap block md:hidden'>
						<Image
							src='/image-hero-mobile.png'
							alt='desktop'
							width={200}
							height={200}
							layout='responsive'
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Introsection;
