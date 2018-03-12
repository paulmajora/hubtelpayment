
class Invoice
{
    /**
     * The individual invoice items and their associated data.
     * @var array
     */
    // public $items;

    /**
     * The taxes associated with the purchase of items.
     * @var array
     */
    // public $taxes;

    /**
     * The total amount of all the items. This represents the actual amount the customer pays.
     * @var double
     */
    // public $total_amount;

    /**
     * A description of the invoice.
     * @var string
     */
    // public $description;

    addItem(item)
    {
        idx = this.items.length;
        this.items[`item_${idx}`] = item;
    }

    removeItem(idx){
        this.items[`item_${idx}`];
    }
}

module.exports = Invoice