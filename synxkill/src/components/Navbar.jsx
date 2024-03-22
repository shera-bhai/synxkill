import { Fragment } from 'react'
import logo from './assets/logo.png'
import { useAuth0 } from '@auth0/auth0-react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const navigation = [
    { name: 'Home', href: '#Home', current: true },
    { name: 'Features', href: '#features', current: false },
    { name: 'Pricing', href: '#pricing', current: false },
    { name: 'Testimonials', href: '#testimonials', current: false },
    // isAuthenticated && { name: 'Dashboard', href: '#', current: false },
  ]
  
  const userNavigation = [
    { name: 'Your Profile', href: '' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Log Out', href: '', onClick: ()=>logout() },
  ]

  return (
    <>
      <div className="Home min-h-full border-b-1 shadow-md shadow-gray-200">
        <Disclosure as="nav">
            <>
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center pl-10 justify-between">
                  <div className="flex items-center space-x-96">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-30"
                        src={logo}
                        alt="synxkill"
                      />
                    </div>
                      <div className="ms-20 flex items-center space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'text-orange-600'
                                : 'text-black-300 hover:text-orange-600',
                              'rounded-md px-3 py-2 text-sm font-semibold'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                  </div>
                  {!isAuthenticated ? (
                    <button onClick={() => loginWithRedirect()} className='mr-16 px-5 py-2 flex gap-2 rounded-full font-semibold text-sm bg-orange-500 hover:text-white hover:bg-orange-600 active:bg-orange-700'>Login</button>
                  ) : (
                    <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-3">

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative">
                        <div>
                          <Menu.Button className="relative flex max-w-xs mr-16 items-center rounded-full bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 ring-offset-2">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open User Menu</span>
                            <img className="h-8 w-8 rounded-full" src={ user.picture } alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 mr-12 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-slate-500 ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    onClick={ item.onClick }
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        </Disclosure>
      </div>
    </>
  )
}
