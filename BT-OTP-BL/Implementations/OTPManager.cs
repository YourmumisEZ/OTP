using BT_OTP_BL.Interfaces;
using BT_OTP_BL.Models;
using OtpNet;
using System;
using System.Text;

namespace BT_OTP_BL.Implementations
{
    public class OTPManager : IOTPManager
    {
        public OTPModel GenerateCode(string userId)
        {
            Totp timeBased_OTP = new Totp(Encoding.ASCII.GetBytes(userId), step: 30);
            return new OTPModel() { Code = timeBased_OTP.ComputeTotp(DateTime.UtcNow), RemainingTime = timeBased_OTP.RemainingSeconds() };

        }
    }
}
