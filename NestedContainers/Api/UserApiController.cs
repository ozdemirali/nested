using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NestedContainers.Api
{
    [RoutePrefix("Api/mobil/User")]
    [AllowAnonymous]
    public class UserApiController : ApiController
    {
        /// <summary>
        /// usera tanımlı olan tüm formları getir
        /// </summary>
        /// <returns></returns>
        [Route("GetForms")]
        [HttpPost]
        public List<string> getForm(string userName)
        {
            var data = new List<string>();
            data.Add("form1");
            data.Add("form2");
            data.Add("form3");
            data.Add("form4");
            return data;
        }

        /// <summary>
        /// usera tanımlı olan tüm listleri getir
        /// </summary>
        /// <returns></returns>
        [Route("GetLists")]
        [HttpPost]
        public List<string> getlist(string userName)
        {
            var data = new List<string>();
            data.Add("List1");
            data.Add("List2");
            data.Add("List3");
            data.Add("List4");
            return data;
        }
        /// <summary>
        /// usera tanımlı menu gelir
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        [Route("getMenu")]
        [HttpPost]
        public string getMenu(string userName)
        {            
            return "Menu1";
        }

        /// <summary>
        /// yukardakileri tek metodda toplamak iyi olabilir
        /// usera ait menu,listler ve formları getiren bir metot
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        [Route("getUserData")]
        [HttpPost]
        public string getUserData(string userName)
        {
            
            return "Menu1";
        }
        /// <summary>
        /// sourceUser ın tüm datalarını  
        /// targetUser a kopyalayan metot
        /// </summary>
        /// <param name="sourceUser"></param>
        /// <param name="targetUser"></param>
        /// <returns></returns>
        [Route("CopyUser")]
        [HttpPost]
        public bool CopyUserData(string sourceUser,string targetUser)
        {
            return true;
        }
        
    }
}
