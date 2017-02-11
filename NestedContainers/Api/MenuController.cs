using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NestedContainers.Api
{
    [RoutePrefix("Api/mobil/Menu")]
    [AllowAnonymous]
    public class MenuController : ApiController
    {
        /// <summary>
        /// sistemde birden fazla menu olabilecek
        /// bu menulerin adı uniq olsun
        /// ada göre çekilsin
        /// </summary>
        /// <returns></returns>
        [Route("GetMenuList")]
        [HttpPost]
        public List<String> getMenuList()
        {
            var data = new List<String>();
            data.Add("Menu1");
            data.Add("Menu2");
            data.Add("Menu3");
            data.Add("Menu4");
            return data;
        }

        /// <summary>
        /// menu adına göre
        /// json olarak kaydedilmiş menu
        /// json olarak geri gönderilecek
        /// </summary>
        /// <param name="menu"></param>
        /// <returns></returns>
        [Route("GetMenu")]
        [HttpPost]
        public MenuModel get(string menu)
        {

            MenuModel menuModel = new MenuModel();
            List<MenuGroupModel> groups = new List<MenuGroupModel>();
            List<MenuItemModel> items = new List<MenuItemModel>();
            MenuItemModel item;
            MenuGroupModel grup = new MenuGroupModel();
            grup.name = "Firma";

            item = new MenuItemModel();
            item.name = "Firma";
            item.link = "FirmaListe";
            item.icon = "ic_menu_share";
            item.type = "LIST";
            items.Add(item);

            grup.data = items;
            groups.Add(grup);

            grup = new MenuGroupModel();
            items = new List<MenuItemModel>();
            grup.name = "Kişiler";
            groups.Add(grup);

            item = new MenuItemModel();
            item.name = "KisiListe";
            item.link = "KisiListe";
            item.icon = "ic_menu_share";
            item.type = "LIST";
            items.Add(item);

            grup.data = items;


            grup = new MenuGroupModel();
            items = new List<MenuItemModel>();
            grup.name = "Aktiviteler";
            groups.Add(grup);

            item = new MenuItemModel();
            item.name = "AktiviteListe";
            item.link = "AktiviteListe";
            item.icon = "ic_menu_share";
            item.type = "LIST";
            items.Add(item);


            item = new MenuItemModel();
            item.name = "İş Başı";
            item.link = "IsBasi";
            item.icon = "ic_menu_share";
            item.type = "LIST";
            items.Add(item);

            item = new MenuItemModel();
            item.name = "Gun Sonu";
            item.link = "GunSonu";
            item.icon = "ic_menu_share";
            item.type = "LIST";
            items.Add(item);

            item = new MenuItemModel();
            item.name = "Id Okut";
            item.link = "IdOkut";
            item.icon = "ic_menu_share";
            item.type = "LIST";
            items.Add(item);
            grup.data = items;

            grup = new MenuGroupModel();
            items = new List<MenuItemModel>();
            grup.name = "Siparişler";



            item = new MenuItemModel();
            item.name = "Listele";
            item.link = "SiparisListele";
            item.icon = "ic_menu_share";
            item.type = "LIST";

            items.Add(item);
            grup.data = items;
            groups.Add(grup);
            menuModel.group = groups;
            return menuModel;
        }
        
        /// <summary>
        /// menu database json olarak kaydedilecek
        /// </summary>
        /// <param name="menu"></param>
        /// <returns></returns>
        [Route("SetMenu")]
        [HttpPost]
        public bool set(MenuModel menu)
        {

            return true;
        }
      
        /// <summary>
        /// gelen menu isimine göre usercheckte true ise o menu o usera tanımlanmış olacak
        /// ÖNEMLİ her usera sadece tek menu tanımlanabilinir.
        /// </summary>
        /// <param name="menuName"></param>
        /// <returns></returns>
        [Route("SetMenuUsers")]
        [HttpPost]
        public bool setMenuUser(MenuUserCheck menuName)
        {            
            return true;
        }
        /// <summary>
        /// gelen menu adına göre user listesi çekeceğiz
        /// menu nün tanımlı olduğu userları true
        /// olmayanları false yapacağız
        /// </summary>
        /// <param name="menu"></param>
        /// <returns></returns>
        [Route("GetMenuUsers")]
        [HttpPost]
        public MenuUserCheck getMenuUsers(string menu)
        {
            var data =new MenuUserCheck();
            data.menu = menu;
            data.usercheck.Add(new UserCheck() { UserName = "ali", isForm = true });
            data.usercheck.Add(new UserCheck() { UserName = "can", isForm = false });
            data.usercheck.Add(new UserCheck() { UserName = "mmm", isForm = false });
            data.usercheck.Add(new UserCheck() { UserName = "alican", isForm = true });
            return data;
        }
    }
}
