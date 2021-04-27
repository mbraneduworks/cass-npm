/**
 *  Contact Grant that is used to share your public key with another user
 *
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcContact
 *  @extends EbacContactGrant
 *  @constructor
 */
module.exports = class EcContactGrant extends EbacContactGrant {
	/**
	 *  Verifies that the contact grant is valid
	 *
	 *  @return {boolean}
	 *  true if valid, false if not
	 */
	valid() {
		if (!this.verify()) return false;
		if (this.invalid()) return false;
		var found = false;
		for (var i = 0; i < EcIdentityManager.ids.length; i++) {
			if (
				EcRsaOaep.verify(
					EcIdentityManager.ids[i].ppk.toPk(),
					this.responseToken,
					this.responseSignature
				)
			)
				found = true;
		}
		return found;
	}
};
