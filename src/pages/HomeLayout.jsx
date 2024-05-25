import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartOverview from "../components/CartOverview";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  // console.log(isPageLoading);
  // check loading here!
  return (
    <div>
        <Header />
            <main>
                { isPageLoading ? <p>Loading...</p> : <Outlet /> }
            </main>
        <div>
        {false && <CartOverview />}
        <Footer />
        </div>
    </div>
  )
}
export default HomeLayout