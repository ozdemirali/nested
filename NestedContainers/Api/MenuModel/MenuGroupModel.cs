using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NestedContainers.Api
{
   public class MenuGroupModel
    {
        public string name { get; set; }
        public List<MenuItemModel> data { get; set; }
    }
}
