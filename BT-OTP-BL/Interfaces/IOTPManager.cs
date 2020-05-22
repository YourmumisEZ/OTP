using BT_OTP_BL.Models;

namespace BT_OTP_BL.Interfaces
{
    public interface IOTPManager
    {
        OTPModel GenerateCode(string userId);
    }
}