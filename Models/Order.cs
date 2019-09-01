using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webshop.Models
{
    public class Order
    {
       public int Id { get; set; }
      public string Status { get; set; }
     
      public string DeliveryAddress { get; set; }
      public string BillingAddress { get; set; }
      
      public string OrderTime { get; set; }

      public ICollection<OrderItem> Products { get; set; }
    }

    public class OrderItem
    { //join entity
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int Quantity { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }
    }

    public enum OrderStatus
    {
      TO_BE_PAID,
      TO_BE_PACKAGED,
      TO_BE_SHIPPED,
      SHIPPING,
      DELIVERED,
    }
}
