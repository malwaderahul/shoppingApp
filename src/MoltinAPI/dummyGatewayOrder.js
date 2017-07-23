var dummyGatewayOrder = {

    listGateways : function(Moltin){
        return Moltin.Gateways.List();
    },
    getGateway : function(Moltin,gatewaySlug){
        return Moltin.Gateways.Get(gatewaySlug);
    },
    updateGateway : function(Moltin,gatewaySlug){
        return Moltin.Gateways.Get(gatewaySlug).then((gateway) => {
            Moltin.Gateways.Update(gateway.slug, {
                key: value
            }).then((gateway) => {
                // Do something
            });
        });
    },
};

module.exports = dummyGatewayOrder;