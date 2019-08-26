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
        public Order ( int id,OrderStatus status, Customer customer, Address deliveryAddress, Address billingAddress, DateTime orderTime)
	{
            Id = id;
            Status = status;
            Customer = customer;
            DeliveryAddress = deliveryAddress;
            BillingAddress = billingAddress;
            OrderTime = orderTime;
        }
      public int Id { get; set; }
      public OrderStatus Status { get; set; }
      public Customer Customer { get; set; }
      public Address DeliveryAddress { get; set; }
      public Address BillingAddress { get; set; }
      [DataType(DataType.Date)]
      public DateTime OrderTime { get; set; }


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
