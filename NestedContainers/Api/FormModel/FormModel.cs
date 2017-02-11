using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NestedContainers.Api
{
   public class FormModel
    {
        public string formName { get; set; }
        public string formTitle { get; set; }
        public string entity { get; set; }
        public string formType { get; set; }
        public string actionButtonLink { get; set; }
        public bool actionButtonIsVisible { get; set; }
        public string actionButtonFromType { get; set; }
        public string parentField { get; set; }
        public string parentFieldId { get; set; }
        public string listPageSize { get; set; }
        public string editLink { get; set; }
        public string editFormType { get; set; }
        public string recordId { get; set; }
        public List<string> Buttons { get; set; }
        public List<Dictionary<String, Object>> widgets { get; set; }
      
    }
}
