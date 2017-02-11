using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NestedContainers.Api
{
    [RoutePrefix("Api/myData")]
    [AllowAnonymous]
    public class MyApiController : ApiController
    {
        [Route("FormType")]
        [HttpPost]
        public List<String> getFormTypes()
        {
            var data = new List<String>();
            data.Add("LIST");
            data.Add("FORM");
            data.Add("RAPOR");
            data.Add("OPPURTUNITY");
            return data;

        }

        /// <summary>
        /// tüm userları çek bu formun tanımlı olduğu kişilerin
        /// isForm propertisini True yap
        /// tanımlı olmayanları false yap gönder
        /// </summary>
        /// <param name="formName"></param>
        /// <returns></returns>
        [Route("Users")]
        [HttpPost]
        public List<UserCheck> getUsers(string formName)
        {
            var data = new List<UserCheck>();
            data.Add(new UserCheck() { UserName = "ali", isForm = true });
            data.Add(new UserCheck() { UserName = "can", isForm = false });
            data.Add(new UserCheck() { UserName = "mmm", isForm = false });
            data.Add(new UserCheck() { UserName = "alican", isForm = true });    
     
            return data;

        }

        /// <summary>
        /// sistemde var olan form isimlerini getir
        /// </summary>
        /// <returns></returns>
        [Route("Forms")]
        [HttpPost]
        public List<string> getForms()
        {
            var data = new List<String>();
            data.Add("Form1");
            data.Add("Form2");
            data.Add("Form3");
            data.Add("Form4");
            return data;

        }
    }


}
