/**
 *  AES encrypted public key and display name message.
 *  Used to grant access to a contact.
 *  Contains Initialization Vectors, but not secrets.
 *  Used to encrypt public identities for storage on remote systems.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacContactGrant
 *  @module org.cassproject
 */
var EbacContactGrant = function() {
    EcRemoteLinkedData.call(this, Ebac.context, EbacContactGrant.TYPE_0_4);
};
EbacContactGrant = stjs.extend(EbacContactGrant, EcRemoteLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/contactGrant";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/contactGrant";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/ContactGrant";
    constructor.TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/ContactGrant";
    /**
     *  Public key being granted to the owner of this message.
     * 
     *  @property pk
     *  @type string(pem)
     */
    prototype.pk = null;
    /**
     *  Display name of the contact.
     * 
     *  @property displayName
     *  @type string
     */
    prototype.displayName = null;
    /**
     *  Source server of the contact.
     * 
     *  @property source
     *  @type string
     */
    prototype.source = null;
    /**
     *  Response token used to validate that this grant is in response to a contact request you sent.
     * 
     *  @property responseToken
     *  @type string
     */
    prototype.responseToken = null;
    /**
     *  Signature (Base64 encoded) of the response token to verify against your own public key
     *  to ensure that this grant is in response to a contact request you sent.
     * 
     *  @property responseSignature
     *  @type string
     */
    prototype.responseSignature = null;
    prototype.upgrade = function() {
        EcRemoteLinkedData.prototype.upgrade.call(this);
        if (EbacContactGrant.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Ebac.context_0_2, EbacContactGrant.TYPE_0_2);
        }
        if (EbacContactGrant.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_3, EbacContactGrant.TYPE_0_3);
        }
        if (EbacContactGrant.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_4, EbacContactGrant.TYPE_0_4);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(EbacContactGrant.TYPE_0_4);
        a.push(EbacContactGrant.TYPE_0_3);
        a.push(EbacContactGrant.TYPE_0_2);
        a.push(EbacContactGrant.TYPE_0_1);
        return a;
    };
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});