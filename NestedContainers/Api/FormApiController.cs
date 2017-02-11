using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NestedContainers.Api
{
    [RoutePrefix("Api/mobil/formData")]
    [AllowAnonymous]
    public class FormApiController : ApiController
    {
       /// <summary>
        /// /// burayı form ve list içinde kullanabiliriz birbirinden ayırmak için data.formType alanını kullanabilirsin
       /// gelen form name göle form dbden çeklipi gönderilecek        
       /// </summary>
       /// <param name="form"></param>
       /// <returns></returns>
        [Route("GetForm")]
        [HttpPost]
        public FormModel get(string form)
        {
            var data = new FormModel();
            data.formName = form;
           // data.formType="FORM","LIST","REPORT","OPPURTONITY"
            return data;
        }

        /// <summary>
        /// burayı form ve list içinde kullanabiliriz birbirinden ayırmak için data.formType alanını kullanabilirsin
        /// 
        /// gelen form menu.formName adı ile kaydı oluşacak
        /// ÖNEMLİ form nameler uniq olmalı, list ve form namelerin adları
        /// da uniq olmalı yani aynı isimde form ve list olmamalı
        /// </summary>
        /// <param name="menu"></param>
        /// <returns></returns>
        [Route("SetForm")]
        [HttpPost]
        public bool set(FormModel menu)
        {
            // data.formType="FORM","LIST","REPORT","OPPURTONITY"
            //menu.formName
            return true;
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


        /// <summary>
        /// gelen forma turu değeri gelmiş usarlara tanımlanadak
        /// false gelenlere tanımlı ise kaldırılacak
        /// </summary>
        /// <param name="formName"></param>
        /// <returns></returns>
        [Route("SetUsers")]
        [HttpPost]
        public bool setUser(MenuUserCheck formName)
        {
            return true;
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
        public MenuUserCheck getUsers(string formName)
        {
            var data = new MenuUserCheck();
            data.menu = formName;
            data.usercheck.Add(new UserCheck() { UserName = "ali", isForm = true });
            data.usercheck.Add(new UserCheck() { UserName = "can", isForm = false });
            data.usercheck.Add(new UserCheck() { UserName = "mmm", isForm = false });
            data.usercheck.Add(new UserCheck() { UserName = "alican", isForm = true });

            return data;

        }

    }


}
