exports.api = [
    ["POST", "/v1/payments/payment"],
    ["POST", "/v1/payments/payment/:PaymentId/execute"],
    ["GET", "/v1/payments/payment/:PaymentId"],
    ["PATCH", "/v1/payments/payment/:PaymentId"],
    ["GET", "/v1/payments/payment/"],
    ["GET", "/v1/payments/sale/:TransactionId"],
    ["POST", "/v1/payments/sale/:Id/refund"],
    ["GET", "/v1/payments/refund/:RefundId"],
    ["GET", "/v1/payments/authorization/:AuthorizationId"],
    ["POST", "/v1/payments/authorization/:AuthorizationId/capture"],
    ["POST", "/v1/payments/authorization/:AuthorizationId/void"],
    ["POST", "/v1/payments/authorization/:AuthorizationId/reauthorize"],
    ["GET", "/v1/payments/capture/:CaptureId"],
    ["POST", "/v1/payments/capture/:CaptureId/refund"],
    ["PATCH", "/v1/payments/billingplans/:PlanId"],
    ["GET", "/v1/payments/billingplans/:PlanId"],
    ["POST", "/v1/payments/v1/payments/billingagreements"],
    ["POST", "/v1/payments/billingagreements/"],
    ["PATCH", "/v1/payments/billingagreements/:AgreementId"],
    ["GET", "/v1/payments/billingagreements/:AgreementId"],
    ["POST", "/v1/payments/billingagreements/:AgreementId/suspend"],
    ["POST", "/v1/payments/billingagreements/:AgreementId/reactivate"],
    ["POST", "/v1/payments/billingagreements/:AgreementId/cancel"],
    ["POST", "/v1/payments/billingagreements/:AgreementId/setbalance"],
    ["POST", "/v1/payments/billingagreements/:AgreementId/billbalance"],
    ["GET", "/v1/payments/orders/:OrderId"],
    ["POST", "/v1/payments/orders/:OrderId/authorize"],
    ["POST", "/v1/payments/orders/:OrderId/capture"],
    ["POST", "/v1/payments/orders/:OrderId/dovoid"],
    ["POST", "/v1/payments/payouts"],
    ["GET", "/v1/payments/payouts/:PayoutBatchId"],
    ["GET", "/v1/payments/payoutsitem/:PayoutItemId"],
    ["POST", "/v1/payments/payoutsitem/:PayoutItemId/cancel"],
    ["POST", "/v1/vault/creditcards"],
    ["DELETE", "/v1/vault/creditcards/:CreditCardId"],
    ["GET", "/v1/vault/creditcards/:CreditCardId"],
    ["GET", "/v1/vault/creditcards"],
    ["PATCH", "/v1/vault/creditcards/:CreditCardId"],
    ["POST", "/v1/identity/openidconnect/tokenservice"],
    ["POST", "/v1/invoicing/invoices"],
    ["POST", "/v1/invoicing/invoices/:InvoiceId/send"],
    ["PUT", "/v1/invoicing/invoices/:InvoiceId"],
    ["GET", "/v1/invoicing/invoices/:InvoiceId"],
    ["GET", "/v1/invoicing/invoices"],
    ["POST", "/v1/invoicing/search"],
    ["POST", "/v1/invoicing/invoices/:InvoiceId/remind"],
    ["POST", "/v1/invoicing/invoices/:InvoiceId/cancel"],
    ["DELETE", "/v1/invoicing/invoices/:InvoiceId"],
    ["POST", "/v1/invoicing/invoices/:invoiceid/recordpayment"],
    ["POST", "/v1/invoicing/invoices/:invoiceid/recordrefund"],
    ["POST", "/v1/paymentexperience/webprofiles"],
    ["GET", "/v1/paymentexperience/webprofiles/:ProfileId"],
    ["GET", "/v1/paymentexperience/webprofiles"],
    ["PUT", "/v1/paymentexperience/webprofiles/:ProfileId"],
    ["PATCH", "/v1/paymentexperience/webprofiles/:ProfileId"],
    ["DELETE", "/v1/paymentexperience/webprofiles/:ProfileId"],
    ["GET", "/v1/notifications/webhookseventtypes"],
    ["POST", "/v1/notifications/webhooks"],
    ["GET", "/v1/notifications/webhooks/:WebhookId"],
    ["GET", "/v1/notifications/webhooks/:WebhookId/eventtypes"],
    ["GET", "/v1/notifications/webhooks"],
    ["PATCH", "/v1/notifications/webhooks/:WebhookId"],
    ["DELETE", "/v1/notifications/webhooks/:WebhookId"],
    ["GET", "/v1/notifications/webhooksevents/:EventId"],
    ["GET", "/v1/notifications/webhooksevents"],
    ["POST", "/v1/notifications/webhooksevents/:EventId/resend"],
    ["POST", "/v1/notifications/simulateevent"]
];