const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/CDCPMDRecord
 * A CDCPMDRecord is a data structure representing a record in a CDC tabular data format
      used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative
      definitions used as the source here.
      
 *
 * @author schema.org
 * @class CDCPMDRecord
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class CDCPMDRecord extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CDCPMDRecord");
	}

	/**
	 * Schema.org/cvdNumC19OverflowPats
	 * numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed.
	 *
	 * @property cvdNumC19OverflowPats
	 * @type Number
	 */
	cvdNumC19OverflowPats;

	/**
	 * Schema.org/cvdNumTotBeds
	 * numtotbeds - ALL HOSPITAL BEDS: Total number of all Inpatient and outpatient beds, including all staffed,ICU, licensed, and overflow (surge) beds used for inpatients or outpatients.
	 *
	 * @property cvdNumTotBeds
	 * @type Number
	 */
	cvdNumTotBeds;

	/**
	 * Schema.org/cvdNumBeds
	 * numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients.
	 *
	 * @property cvdNumBeds
	 * @type Number
	 */
	cvdNumBeds;

	/**
	 * Schema.org/cvdNumC19OFMechVentPats
	 * numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator.
	 *
	 * @property cvdNumC19OFMechVentPats
	 * @type Number
	 */
	cvdNumC19OFMechVentPats;

	/**
	 * Schema.org/cvdNumC19HospPats
	 * numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19.
	 *
	 * @property cvdNumC19HospPats
	 * @type Number
	 */
	cvdNumC19HospPats;

	/**
	 * Schema.org/cvdNumVent
	 * numvent - MECHANICAL VENTILATORS: Total number of ventilators available.
	 *
	 * @property cvdNumVent
	 * @type Number
	 */
	cvdNumVent;

	/**
	 * Schema.org/cvdNumBedsOcc
	 * numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied.
	 *
	 * @property cvdNumBedsOcc
	 * @type Number
	 */
	cvdNumBedsOcc;

	/**
	 * Schema.org/cvdNumC19HOPats
	 * numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization.
	 *
	 * @property cvdNumC19HOPats
	 * @type Number
	 */
	cvdNumC19HOPats;

	/**
	 * Schema.org/cvdNumC19Died
	 * numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location.
	 *
	 * @property cvdNumC19Died
	 * @type Number
	 */
	cvdNumC19Died;

	/**
	 * Schema.org/cvdCollectionDate
	 * collectiondate - Date for which patient counts are reported.
	 *
	 * @property cvdCollectionDate
	 * @type DateTime
	 */
	cvdCollectionDate;

	/**
	 * Schema.org/cvdNumVentUse
	 * numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use.
	 *
	 * @property cvdNumVentUse
	 * @type Number
	 */
	cvdNumVentUse;

	/**
	 * Schema.org/cvdFacilityCounty
	 * Name of the County of the NHSN facility that this data record applies to. Use [[cvdFacilityId]] to identify the facility. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
	 *
	 * @property cvdFacilityCounty
	 * @type Text
	 */
	cvdFacilityCounty;

	/**
	 * Schema.org/cvdNumICUBedsOcc
	 * numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied.
	 *
	 * @property cvdNumICUBedsOcc
	 * @type Number
	 */
	cvdNumICUBedsOcc;

	/**
	 * Schema.org/datePosted
	 * Publication date of an online listing.
	 *
	 * @property datePosted
	 * @type Date
	 */
	datePosted;

	/**
	 * Schema.org/cvdNumICUBeds
	 * numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds.
	 *
	 * @property cvdNumICUBeds
	 * @type Number
	 */
	cvdNumICUBeds;

	/**
	 * Schema.org/cvdFacilityId
	 * Identifier of the NHSN facility that this data record applies to. Use [[cvdFacilityCounty]] to indicate the county. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
	 *
	 * @property cvdFacilityId
	 * @type Text
	 */
	cvdFacilityId;

	/**
	 * Schema.org/cvdNumC19MechVentPats
	 * numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator.
	 *
	 * @property cvdNumC19MechVentPats
	 * @type Number
	 */
	cvdNumC19MechVentPats;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CDCPMDRecord:
 *       type: object
 *       description: "A cdcpmdrecord derived from schema.org/CDCPMDRecord"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StructuredValue'
 *         - properties:
 *             cvdNumC19OverflowPats:
 *               description: numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed.
 *               type: number
 *             cvdNumTotBeds:
 *               description: numtotbeds - ALL HOSPITAL BEDS: Total number of all Inpatient and outpatient beds, including all staffed,ICU, licensed, and overflow (surge) beds used for inpatients or outpatients.
 *               type: number
 *             cvdNumBeds:
 *               description: numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients.
 *               type: number
 *             cvdNumC19OFMechVentPats:
 *               description: numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator.
 *               type: number
 *             cvdNumC19HospPats:
 *               description: numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19.
 *               type: number
 *             cvdNumVent:
 *               description: numvent - MECHANICAL VENTILATORS: Total number of ventilators available.
 *               type: number
 *             cvdNumBedsOcc:
 *               description: numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied.
 *               type: number
 *             cvdNumC19HOPats:
 *               description: numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization.
 *               type: number
 *             cvdNumC19Died:
 *               description: numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location.
 *               type: number
 *             cvdCollectionDate:
 *               description: collectiondate - Date for which patient counts are reported.
 *               type: string
 *             cvdNumVentUse:
 *               description: numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use.
 *               type: number
 *             cvdFacilityCounty:
 *               description: Name of the County of the NHSN facility that this data record applies to. Use [[cvdFacilityId]] to identify the facility. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
 *               type: string
 *             cvdNumICUBedsOcc:
 *               description: numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied.
 *               type: number
 *             datePosted:
 *               description: Publication date of an online listing.
 *               type: string
 *             cvdNumICUBeds:
 *               description: numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds.
 *               type: number
 *             cvdFacilityId:
 *               description: Identifier of the NHSN facility that this data record applies to. Use [[cvdFacilityCounty]] to indicate the county. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
 *               type: string
 *             cvdNumC19MechVentPats:
 *               description: numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator.
 *               type: number
*/