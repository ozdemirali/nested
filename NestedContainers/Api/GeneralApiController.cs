using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NestedContainers.Api
{
    [RoutePrefix("Api/mobil/generalData")]
    [AllowAnonymous]
    public class GeneralApiController : ApiController
    {
     
        /// <summary>
        /// sistemde var olan tabloları çeker
        /// </summary>
        /// <returns></returns>
        [Route("Entity")]
        [HttpPost]
        public List<string> getEntities()
        {
            var data = new List<String>();
            data.Add("Company");
            data.Add("Activity");
            data.Add("Contact");
            //....diğerleri
            return data;

        }
        /// <summary>
        /// gelen tablo adına göre o tablunun alanlarını getirir        
        /// </summary>
        /// <param name="EntityName"></param>
        /// <returns></returns>
        [Route("Fields")]
        [HttpPost]
        public List<string> getEntitiesFields(string EntityName)
        {
            //EntityName=Company
            var data = new List<String>();
            data.Add("Id");
            data.Add("Name");
            data.Add("Mail");
            //....diğerleri
            return data;

        }
                   

        /// <summary>
        /// sistemde var olan 
        /// dropdownlarda kullanılabilecek sql ifadeleri çeklir  
        /// colm1 ve colm2 Text value değerleri ile birlikte gönderilir        
        /// </summary>
        /// <returns></returns>
        [Route("SQL")]
        [HttpPost]
        public List<SqlModel> getSqlQuery()
        {
            var data = new List<SqlModel>();
            data.Add(new SqlModel() { sqlName = "ali", Id = 1, colm1 = "Text", colm2 = "Value" });
            data.Add(new SqlModel() { sqlName = "can", Id = 2, colm1 = "Text2", colm2 = "Value2" });
            data.Add(new SqlModel() { sqlName = "mmm", Id = 3, colm1 = "Text3", colm2 = "Value3" });
            data.Add(new SqlModel() { sqlName = "alican", Id = 4, colm1 = "Text4", colm2 = "Value4" });
            return data;
        }


    }


}
