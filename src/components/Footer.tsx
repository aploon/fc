import { TextInput, Button } from '@carbon/react'
import {
  LogoLinkedin,
  LogoTwitter,
  LogoFacebook,
  LogoYoutube,
  Rss as RssIcon,
} from '@carbon/icons-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 text-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10">
        {/* Brand */}
        <div className="py-8">
          <img src="/logo.png" alt="Brand" className="h-9 w-auto" />
        </div>

        {/* Subscribe section */}
        <div className="py-6">
          <h2 className="text-lg font-semibold">Subscribe</h2>
          <p className="mt-2 text-sm text-gray-600">
            Select topics and stay current with our latest insights
          </p>
          <form
            className="mt-4 flex w-full max-w-xl gap-3"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="flex-1">
              <TextInput id="footer-email" type="email" placeholder="Email address" labelText="Email" hideLabel />
            </div>
            <Button type="submit" kind="primary">Submit</Button>
          </form>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* App badges and legal mini blurb */}
        <div className="py-4">
          <p className="text-sm text-gray-600">
            Our insights – Get our latest thinking on your iPhone, iPad, or Android device.
          </p>
          <div className="mt-3 flex items-center gap-3">
            {/* Placeholder badges; replace with real assets if desired */}
            <div className="h-10 w-32 rounded bg-gray-100" aria-label="App Store badge placeholder" />
            <div className="h-10 w-36 rounded bg-gray-100" aria-label="Google Play badge placeholder" />
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Links row */}
        <div className="grid grid-cols-1 gap-3 py-4 text-sm text-gray-700 md:grid-cols-3">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:underline">Contact us</a>
            <a href="#" className="hover:underline">Scam warning</a>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Your privacy choices</a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:underline">Cookie preferences</a>
            <a href="#" className="hover:underline">Terms of use</a>
            <a href="#" className="hover:underline">Local language information</a>
            <a href="#" className="hover:underline">Accessibility statement</a>
          </div>
          <div className="mt-2 flex items-center gap-3 md:mt-0 md:justify-end">
            {/* Social icons placeholders (replace as needed) */}
            <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">
              <LogoLinkedin size={20} />
            </a>
            <a href="#" aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">
              <LogoTwitter size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">
              <LogoFacebook size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">
              <LogoYoutube size={20} />
            </a>
            <a href="#" aria-label="RSS" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">
              <RssIcon size={20} />
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Copyright */}
        <div className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} HeartConsultants LLC</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


