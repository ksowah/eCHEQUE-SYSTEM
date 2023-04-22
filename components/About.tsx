const About_Block = () => {
  return (
    <div className="py-[2rem] w-full bg-white md:px-[8rem]">
      <div className="p-[4px] md:px-[2rem]">
        <h1 className="text-blacl text-center text-[2rem] font-bold">
          Background Statement
        </h1>

        <h1 className="text-blacl text-center text-[1.2rem] font-bold mt-4">
          Digital Payments and Mobile Wallets
        </h1>

        <h2 className="text-blacl text-[1.5rem] text-primary font-bold mt-[2rem] ">
          Electronic Cheque System (eCheque)
        </h2>
        <div>
          In a world where every nation is moving cashless, team CodeGeeks has come
          up with an Artificial Intelligence electronic Cheque system. With our
          eCheque system, you can snap a cheque and verify its validity before
          heading to bank. Not just that but you can as well be at the comfort of your home and transfer
          money into your bank account without any charges.
        </div>
        <h2 className="text-blacl text-[1.5rem] text-primary font-bold mt-[2rem] ">
          Why Cheque is still in use?
        </h2>
        <p>
          Ghana&rsquo;s market for mobile money services has seen the most growth in the country&rsquo;s digital financial services sector.
          As the use of mobile money increases, fraudulent activity also keeps occurring. When compared to
          carrying cash, checks are thought to be safer and more practical. Additionally, if your check is lost,
          nobody can use it. According to at least one research, the typical bank line-up time exceeds 20 minutes.
          It occasionally lags for up to 40 minutes. As a result, our AI software will shorten lines at the bank and enable
          more remote customers to conduct typical business without visiting the institution. This will significantly increase financial inclusion in Ghana and assist in reducing
          the additional fees the e-levy levies on users of mobile money.
        </p>
      </div>

      <div className="p-[4px] md:px-[2rem]">
        <h2 className="text-blacl text-[1.5rem] text-primary font-bold mt-[2rem] ">
          How eCheque Works
        </h2>
        <h4 className="text-[1.3rem] font-medium">
          Three conditions are met before a cheque is verified:
        </h4>
        <p className="md:ml-[2rem]">
          1. The payee should have an account with the bank.
        </p>
        <p className="md:ml-[2rem]">
          2. An image processing model filters the cheque, extract the signature
          and compares it with the signature in the banks database to checks if
          the structural similarity is greater or equal to 90%.
        </p>
        <p className="md:ml-[2rem]">
          3. Last condition, the amount in the payee’s account is greater or
          equals to the amount written on the cheque.
        </p>
      </div>

      <div className="p-[4px] md:px-[2rem]">
        <h2 className="text-blacl text-[1.5rem] text-primary font-bold mt-[2rem]">
          Security Features on the Cheque (QR)
        </h2>
        <p className="md:ml-[2rem]">1. Upload Identity Card.</p>
        <p className="md:ml-[2rem]">2. Confirmation from drawer.</p>
      </div>
    </div>
  );
};

export default About_Block;
