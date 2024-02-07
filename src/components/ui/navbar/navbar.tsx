import AuctionBayLogo from '@/assets/auctionbay-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Route } from '@/routes';
import NavigationTab from '@/components/ui/navbar/navigation-tab';
import { getServerAuthSession } from '@/server/auth';
import NavbarUserActions from '@/components/ui/navbar/navbar-user-actions';
import NavbarAuthActions from '@/components/ui/navbar/navbar-auth-actions';

const Navbar = async () => {
  const session = await getServerAuthSession();

  return (
    <div
      className={'mx-4 my-5 flex flex-row items-center justify-between sm:mx-8'}
    >
      <div className={'flex h-full flex-row gap-8'}>
        <Link href={Route.HOME}>
          <Image
            src={AuctionBayLogo}
            alt={'AuctionBay Logo'}
            className={' h-12 w-12 sm:h-16 md:w-16'}
            priority
          />
        </Link>
        <NavigationTab />
      </div>
      {session ? <NavbarUserActions /> : <NavbarAuthActions />}
    </div>
  );
};
export default Navbar;
