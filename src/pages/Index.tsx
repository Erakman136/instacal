import InstagramLogo from "@/components/InstagramLogo";
import LoginForm from "@/components/LoginForm";
import PhotoCollage from "@/components/PhotoCollage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex">
        {/* Left side - Branding */}
        <div className="hidden lg:flex flex-1 flex-col items-center justify-center px-8">
          <div className="max-w-lg flex flex-col items-center">
            <div className="self-start mb-12">
              <InstagramLogo className="w-14 h-14" />
            </div>
            
            <h1 className="text-4xl font-medium text-center mb-12 leading-tight">
              See everyday moments from your{" "}
              <span className="close-friends-gradient font-medium">close friends</span>.
            </h1>
            
            <PhotoCollage />
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex-1 lg:max-w-[480px] login-panel-bg flex items-center justify-center px-8 py-12">
          <LoginForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
