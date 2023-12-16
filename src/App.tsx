import Header from "./components/Header";
import LeadingContent from "./components/LeadingContent";
import SubscriptionForm from "./components/SubscriptionForm";
import s from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className={s.mainContent}>
            <LeadingContent />
            <SubscriptionForm className={s.subscriptionForm} />
            <div className={s.hpImageDecoContainer}>
              <img
                src="/hp-illustration.svg"
                alt="decorative user cloud"
                className={s.hpImageDeco}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
