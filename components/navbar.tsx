import Container from '@/components/ui/container';
import Link from 'next/link';
import MainNav from '@/components/main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from '@/components/navbar-actions';
import MobileNav from './mobile-nav';

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-white fixed top-0 z-30 w-full border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="font-bold text-xl">GROVE</p>
          </Link>
          <div className="hidden md:block">
            <MainNav data={categories} />
          </div>
          <NavbarActions />
          <div className="md:hidden flex gap-4 items-center justify-end ml-auto">
            <MobileNav data={categories} />
          </div>

          {/*cart on the left on mobile*/}
          {/* <div className="flex gap-4 items-center justify-end ml-auto">
            <NavbarActions />
            <div className="md:hidden">
              <MobileNav data={categories} />
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
