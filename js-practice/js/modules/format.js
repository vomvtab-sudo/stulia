'use strict';

function formatReceipt(order) {

    const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discountAmount = 0;
    if (typeof order.discount === 'number') {

        if (order.discount > 1) {

            discountAmount = order.discount;

        } else {

            discountAmount = subtotal * order.discount;

        }

    }

    const totalA = Math.max(0, subtotal - discountAmount);
    const taxAm = totalA * (order.taxRate || 0);
    const total = parseFloat((totalA + taxAm + (order.shipping || 0)).toFixed(2));
    const lines = [];
    const lineW = 32;

    lines.push('13 Стульев'.padStart(16));
    lines.push('ул. Пушкина, д. 2'.padStart(18));
    lines.push('КАССОВЫЙ ЧЕК'.padStart(14));
    lines.push('--------------------------------'.padEnd(lineW));

    const now = new Date();
    lines.push(now.toLocaleString('ru-RU').padEnd(lineW));
    lines.push('--------------------------------'.padEnd(lineW));
    lines.push('ТОВАРЫ:'.padEnd(lineW));

    order.items.forEach(item => {

        const lit = (item.price * item.quantity).toFixed(2);
        const text = `${item.name} x${item.quantity}`;
        lines.push(text.padEnd(lineW - 9) + lit.padStart(9));

    });

    lines.push('--------------------------------'.padEnd(lineW));
    lines.push(`ИТОГ:`.padEnd(lineW - 7) + subtotal.toFixed(2).padStart(7));

    if (promo.value == 'STUL10' || 'stul10') {

        lines.push(`СКИДКА: 10%`.padEnd(lineW - 8));

    }
  
    if (order.shipping && order.shipping > 0) {
    
        lines.push(`ДОСТАВКА:`.padEnd(lineW - 9) + order.shipping.toFixed(2).padStart(9));

    }

    lines.push('================================'.padEnd(lineW));
    lines.push(`К ОПЛАТЕ:`.padEnd(lineW - 8) + total.toFixed(2).padStart(8));
    lines.push('================================'.padEnd(lineW));

    return lines.join('\n');

}

export {formatReceipt};