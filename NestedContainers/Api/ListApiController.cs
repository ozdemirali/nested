using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NestedContainers.Api
{
    [RoutePrefix("Api/mobil/listData")]
    [AllowAnonymous]
    public class ListApiController : ApiController
    {
        /// <summary>
        /// sistemde olan tüm sql lerin
        /// adlarını ve Idlerini gönder
        /// </summary>
        /// <returns></returns>
        [Route("SQLlist")]
        [HttpPost]
        public List<SqlListModel> getSql()
        {
            var data = new List<SqlListModel>();
            data.Add(new SqlListModel() { id = 1, name = "SQL1" });
            data.Add(new SqlListModel() { id = 2, name = "SQL2" });
            data.Add(new SqlListModel() { id = 3, name = "SQL3" });
            data.Add(new SqlListModel() { id = 4, name = "SQL4" });
            return data;
        }
        /// <summary>
        /// gönderilen ssql idye göre sql çalıştırılır ve 
        /// colum adları elde edilerek list halinde gönderilir
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("SQL")]
        [HttpPost]
        public List<string> getSqlQuery(int id)
        {
            var data = new List<string>();
            data.Add("colm1");
            data.Add("colm2");
            data.Add("colm3");
            data.Add("colm4");
            data.Add("colm5");
            //...diğerleri
            return data;
        }

        /// <summary>
        /// gelen list 
        /// userlarda tru olanlara tanımlanacak
        /// false olanlarda tanımlıysa silinecek
        /// </summary>
        /// <param name="listName"></param>
        /// <returns></returns>
        [Route("SetUsers")]
        [HttpPost]
        public bool setUser(MenuUserCheck listName)
        {
            return true;
        }
        /// <summary>
        /// userların tamamını çeker
        /// gelen list name nin tanımlı oladuğu userlara true
        /// depğeri yazılır gönderilir
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        [Route("GetUsers")]
        [HttpPost]
        public MenuUserCheck getUsers(string list)
        {
            var data = new MenuUserCheck();
            data.menu = list;
            data.usercheck.Add(new UserCheck() { UserName = "ali", isForm = true });
            data.usercheck.Add(new UserCheck() { UserName = "can", isForm = false });
            data.usercheck.Add(new UserCheck() { UserName = "mmm", isForm = false });
            data.usercheck.Add(new UserCheck() { UserName = "alican", isForm = true });
            return data;
        }
    }
}
