"use-client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const [searchParams]: any = useSearchParams();
  console.log(searchParams);
  const email = searchParams[1];

  const handleOtpChange = (newOtp: any) => {
    setOtp(newOtp);
  };

  const verifyEmail = async () => {
    try {
      const response = await fetch(
        `https://akil-backend.onrender.com/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            otp,
            email,
          }),
        }
      );

      const { success, message } = await response.json();

      if (success) {
        router.push("/api/auth/signin");
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      alert("An error occurred while verifying your email. Please try again.");
    }
  };

  useEffect(() => {
    if (otp.length === 4) {
      verifyEmail();
    }
  }, [otp]);

  return (
    <div className="flex justify-center">
      <InputOTP maxLength={4} value={otp} onChange={handleOtpChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default VerifyEmail;
