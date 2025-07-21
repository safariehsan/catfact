import React from "react";

const Contact = () => {
  return (
    <div className="bg-white flex h-screen">
      <div className="relative isolate px-6 lg:px-8 m-auto">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900">
              Contact Information
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Please find my contact details below:
            </p>
          </div>
          <div className="mb-8 sm:justify-center">
            <div className=" rounded-full px-3 py-1 my-2 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Email: ehsansafari@hotmail.com
            </div>
            <div className=" rounded-full px-3 py-1  my-2 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              LinkedIn: Linkedin.com/in/safariehsan
            </div>
            <div className=" rounded-full px-3 py-1  my-2 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Website: www.ehsansafari.com
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
