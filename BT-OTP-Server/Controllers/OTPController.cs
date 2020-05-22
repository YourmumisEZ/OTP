using BT_OTP_BL.Interfaces;
using BT_OTP_BL.Models;
using Microsoft.AspNetCore.Mvc;

namespace BT_OTP_Server.Controllers
{
    [Route("api/otp")]
    [ApiController]
    public class OTPController : ControllerBase
    {
        private readonly IOTPManager otpManager;

        public OTPController(IOTPManager otpManager)
        {
            this.otpManager = otpManager;
        }

        [HttpGet]
        public ActionResult<OTPModel> Get(string userId)
        {
            var result = otpManager.GenerateCode(userId);
            return result;
        }
    }
}