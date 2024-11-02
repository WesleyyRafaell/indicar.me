import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BarChart, Briefcase, Building, Check, Filter, Globe, GraduationCap, Search, Star, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage () {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='flex h-14 items-center px-4 lg:px-6'>
        <Link className='flex items-center justify-center' href='#'>
          <Search className='mr-2 size-6' />
          <span className='font-bold'>ProSearch</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-sm font-medium underline-offset-4 hover:underline' href='#'>
            Features
          </Link>
          <Link className='text-sm font-medium underline-offset-4 hover:underline' href='#'>
            Pricing
          </Link>
          <Link className='text-sm font-medium underline-offset-4 hover:underline' href='#'>
            About
          </Link>
          <Link className='text-sm font-medium underline-offset-4 hover:underline' href='#'>
            Contact
          </Link>
        </nav>
        <Link href={'/auth/signin'}>
          <Button variant='secondary' className='ml-4'>
            Log in
          </Button>
        </Link>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Professional Search System
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl'>
                  Find the information you need quickly and efficiently with our advanced search technology.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <form className='flex space-x-2'>
                  <Input className='max-w-lg flex-1' placeholder='Enter your search query' type='text' />
                  <Button type='submit'>Search</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='rounded-full bg-white p-4 dark:bg-gray-900'>
                  <Zap className='size-6' />
                </div>
                <h2 className='text-xl font-bold'>Lightning Fast</h2>
                <p className='text-gray-500 dark:text-gray-400'>Get results in milliseconds with our optimized search engine.</p>
              </div>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='rounded-full bg-white p-4 dark:bg-gray-900'>
                  <BarChart className='size-6' />
                </div>
                <h2 className='text-xl font-bold'>Advanced Analytics</h2>
                <p className='text-gray-500 dark:text-gray-400'>Gain insights from your search data with powerful analytics tools.</p>
              </div>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='rounded-full bg-white p-4 dark:bg-gray-900'>
                  <Users className='size-6' />
                </div>
                <h2 className='text-xl font-bold'>Collaborative</h2>
                <p className='text-gray-500 dark:text-gray-400'>Share and collaborate on search results with your team effortlessly.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='mb-12 text-center text-3xl font-bold tracking-tighter'>Find the Right Professional</h2>
            <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='rounded-full bg-blue-100 p-4 dark:bg-blue-900'>
                  <Briefcase className='size-8 text-blue-500 dark:text-blue-300' />
                </div>
                <h3 className='text-xl font-bold'>Industry Expertise</h3>
                <p className='text-gray-500 dark:text-gray-400'>Search professionals by their specific industry experience.</p>
              </div>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='rounded-full bg-green-100 p-4 dark:bg-green-900'>
                  <GraduationCap className='size-8 text-green-500 dark:text-green-300' />
                </div>
                <h3 className='text-xl font-bold'>Educational Background</h3>
                <p className='text-gray-500 dark:text-gray-400'>Filter professionals based on their educational qualifications.</p>
              </div>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='rounded-full bg-purple-100 p-4 dark:bg-purple-900'>
                  <Building className='size-8 text-purple-500 dark:text-purple-300' />
                </div>
                <h3 className='text-xl font-bold'>Company Size</h3>
                <p className='text-gray-500 dark:text-gray-400'>Find professionals from startups to large corporations.</p>
              </div>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='rounded-full bg-yellow-100 p-4 dark:bg-yellow-900'>
                  <Globe className='size-8 text-yellow-500 dark:text-yellow-300' />
                </div>
                <h3 className='text-xl font-bold'>Location</h3>
                <p className='text-gray-500 dark:text-gray-400'>Search for professionals in specific regions or globally.</p>
              </div>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='rounded-full bg-red-100 p-4 dark:bg-red-900'>
                  <Filter className='size-8 text-red-500 dark:text-red-300' />
                </div>
                <h3 className='text-xl font-bold'>Advanced Filters</h3>
                <p className='text-gray-500 dark:text-gray-400'>Use multiple criteria to refine your professional search.</p>
              </div>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='rounded-full bg-indigo-100 p-4 dark:bg-indigo-900'>
                  <Star className='size-8 text-indigo-500 dark:text-indigo-300' />
                </div>
                <h3 className='text-xl font-bold'>Ratings and Reviews</h3>
                <p className='text-gray-500 dark:text-gray-400'>Find top-rated professionals based on client feedback.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='mb-12 text-center text-3xl font-bold tracking-tighter'>Pricing Plans</h2>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For individuals and small teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='mb-4 text-4xl font-bold'>$9.99<span className='text-lg font-normal'>/month</span></div>
                  <ul className='space-y-2'>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> Up to 1,000 searches/month</li>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> Basic analytics</li>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> 1 user</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='mb-4 text-4xl font-bold'>$29.99<span className='text-lg font-normal'>/month</span></div>
                  <ul className='space-y-2'>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> Up to 10,000 searches/month</li>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> Advanced analytics</li>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> 5 users</li>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> API access</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='mb-4 text-4xl font-bold'>Custom</div>
                  <ul className='space-y-2'>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> Unlimited searches</li>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> Custom analytics</li>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> Unlimited users</li>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> Dedicated support</li>
                    <li className='flex items-center'><Check className='mr-2 size-4' /> Custom integrations</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Start Searching Smarter Today</h2>
                <p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Join thousands of professionals who have already improved their workflow with our search system.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <form className='flex space-x-2'>
                  <Input className='max-w-lg flex-1' placeholder='Enter your email' type='email' />
                  <Button type='submit'>Get Started</Button>
                </form>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  By signing up, you agree to our{' '}
                  <Link className='underline underline-offset-2' href='#'>
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>© 2024 ProSearch Inc. All rights reserved.</p>
        <nav className='flex gap-4 sm:ml-auto sm:gap-6'>
          <Link className='text-xs underline-offset-4 hover:underline' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs underline-offset-4 hover:underline' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
