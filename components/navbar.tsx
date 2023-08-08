import Container from '@/components/ui/container';
import Link from 'next/link';
import MainNav from '@/components/main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from '@/components/navbar-actions';

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-white fixed top-0 z-30 w-full border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="font-bold text-xl">GROVE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
