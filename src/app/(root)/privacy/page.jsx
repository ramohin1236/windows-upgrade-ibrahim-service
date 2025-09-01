import React from "react";
import contact_man from "../../../../public/contact_man.svg";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../src/components/ui/breadcrumb";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <section className="pb-16 ">
      {/* Hero Section */}
      <div className="bg-[#e6f4f1] mb-8 lg:mb-20">
        <div>
          <div className=" project_container flex flex-col gap-8 lg:flex-row justify-between items-center ">
            {/* left side */}
            <div className="flex flex-col pt-10 lg:pt-0">
              <h3 className="text-2xl lg:text-4xl font-semibold mb-5">
                Privacy Policy{" "}
              </h3>
              <div>
                <Breadcrumb>
                  <BreadcrumbList>
                    {/* Home link */}
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/"
                        className="
                            font-semibold lg:text-base"
                      >
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    {/* Separator */}
                    <BreadcrumbSeparator className="text-base" />

                    {/* Current page */}
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[#0EA5E9] font-semibold lg:text-base">
                        Privacy Policy
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
            {/* right side */}
            <div>
              <Image
                src={contact_man}
                alt="hero contact image"
                className="lg:h-96 
                      pr-24 lg:pr-0 "
              />
            </div>
          </div>
        </div>
      </div>
      {/* privacy policys */}
      <div className="project_container flex flex-col gap-8 px-4">
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">Privacy Policy</h5>
          <p className="text-base text-[#2B2B2B]">
            Welcome to iLera . These Terms and Conditions ("Terms") govern your
            use of our services provided through the App. By accessing or using
            the App, you agree to comply with and be bound by these Terms. If
            you do not agree with these Terms, you should not use the App.
            Services
          </p>
          <p className="text-base text-[#2B2B2B]">
            iLera allows users to book appointments with healthcare providers.
            We facilitate the booking process but are not responsible for the
            medical services provided by healthcare professionals. All medical
            services are provided by independent healthcare professionals.
          </p>
        </div>
{/* User Responsibilities */}
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">User Responsibilities</h5>
          
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 1. Account Creation:</span> To use certain features of the App, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 2. Confidentiality:</span> You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.
          </p>
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 3. Use of Services:</span>  You agree to use the App only for lawful purposes and in accordance with these Terms. You will not use the App in any way that could damage, disable, overburden, or impair the App or interfere with any other party's use of the App.
          </p>
          
        </div>
{/* Appointments and Cancellations */}
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">Appointments and Cancellations</h5>
          
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 1. Booking:</span> By booking an appointment through the App, you agree to provide accurate information. The healthcare provider has the right to accept or decline your appointment request.
          </p>
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 2. Cancellations:</span>  If you need to cancel an appointment, you must do so according to the cancellation policy of the healthcare provider. Failure to cancel within the stipulated time may result in a cancellation fee.
          </p>
         
        </div>
{/* Payments */}
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">Payments</h5>
          
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 1. Fees:</span>Any fees for services provided through the App are set by the healthcare providers. The App may facilitate the payment process but is not responsible for the services provided.
          </p>
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 2. Payment Information:</span>  You agree to provide valid payment information and authorize the App to charge your payment method for the services provided by the healthcare provider.
          </p>
          <p className="text-base text-[#2B2B2B]">
           Privacy Your use of the App is also gov
          </p>
          <p className="text-base text-[#2B2B2B]">
           Disclaimers and Limitation of Liability
          </p>
         
        </div>


     <div className="flex flex-col gap-2">
          
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 1. No Medical Advice:</span>The App does not provide medical advice. Any content accessed through the App is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 2. No Warranties:</span>  The App is provided "as is" without warranties of any kind, either express or implied.
          </p>
          <p className="text-base text-[#2B2B2B]">
           <span className="text-[#2B2B2B] text-xl font-semibold"> 3. Limitation of Liability:</span>  To the maximum extent permitted by law, [App Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the App; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein.
          </p>
         
        </div>


        {/* Appointments and Cancellations */}
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">Changes to Terms</h5>
          
          <p className="text-base text-[#2B2B2B]">
           We may update these Terms from time to time. If we make material changes, we will notify you by posting the updated Terms on the App or through other communications. Your continued use of the App after the changes become effective means you agree to the updated Terms.
          </p>
         
         
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
