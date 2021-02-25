/**
 *  credentialengine.org/LearningOpportunityProfile
 *  Entity describing an educational or training opportunity.
 *  Opportunities include formal and informal educational training programs and classes, apprenticeship or work experience programs, or other structured or unstructured experiences that serve as educational or training activities.
 *  @author credentialengine.org
 *  @class LearningOpportunityProfile
 *  @module org.credentialengine
 *  @extends CreativeWork
 */
var LearningOpportunityProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "LearningOpportunityProfile";
};
LearningOpportunityProfile = stjs.extend(LearningOpportunityProfile, CreativeWork, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/accreditedBy
     *  Quality assurance organization that provides official authorization to, or approval of, a credential, organization, assessment, or learning opportunity.
     *  @property accreditedBy
     *  @type QACredentialOrganization
     */
    prototype.accreditedBy = null;
    /**
     *  http://purl.org/ctdl/terms/accreditedIn
     *  Region or political jurisdiction such as a state, province or locale in which the credential, learning opportunity or assessment is accredited.
     *  @property accreditedIn
     *  @type JurisdictionProfile
     */
    prototype.accreditedIn = null;
    /**
     *  http://purl.org/ctdl/terms/advancedStandingFrom
     *  Credential that has its time or cost reduced by another credential, assessment or learning opportunity.
     *  @property advancedStandingFrom
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.advancedStandingFrom = null;
    /**
     *  http://purl.org/ctdl/terms/approvedBy
     *  Organization that pronounces favorable judgment for this credential, assessment, learning opportunity, or organization.
     *  @property approvedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.approvedBy = null;
    /**
     *  http://purl.org/ctdl/terms/approvedIn
     *  Region or political jurisdiction such as a state, province or locale in which an organization pronounces favorable judgment for this credential, assessment, learning opportunity, or organization.
     *  @property approvedIn
     *  @type JurisdictionProfile
     */
    prototype.approvedIn = null;
    /**
     *  http://purl.org/ctdl/terms/audienceType
     *  The type of credential seeker for whom the entity is applicable; select from an existing enumeration of such types.
     *  @property audienceType
     *  @type CredentialAlignmentObject
     */
    prototype.audienceType = null;
    /**
     *  http://purl.org/ctdl/terms/availabilityListing
     *  Listing of online and/or physical locations where a credential can be pursued.
     *  @property availabilityListing
     *  @type anyURI
     */
    prototype.availabilityListing = null;
    /**
     *  http://purl.org/ctdl/terms/availableAt
     *  Physical location where the credential, assessment, or learning opportunity can be pursued.
     *  @property availableAt
     *  @type Place
     */
    prototype.availableAt = null;
    /**
     *  http://purl.org/ctdl/terms/availableOnlineAt
     *  Online location where the credential, assessment, or learning opportunity can be pursued.
     *  @property availableOnlineAt
     *  @type anyURI
     */
    prototype.availableOnlineAt = null;
    /**
     *  http://purl.org/ctdl/terms/codedNotation
     *  Set of alpha-numeric symbols that uniquely identifies an item and supports its discovery and use.
     *  Examples include the alpha-numeric code "CCSS.MATH.CONTENT.HSA.CED.A.2" identifying a node in the U.S. Common Core State Standards on creating equations in algebra, or, the code "8021" in the U.S. Standard Industrial Classification (SIC) for identifying the occupational context for "Offices and Clinics of Dentists".
     *  @property codedNotation
     *  @type string
     */
    prototype.codedNotation = null;
    /**
     *  http://purl.org/ctdl/terms/commonConditions
     *  Set constraints, prerequisites, entry conditions, or requirements that are shared across an organization, organizational subdivision, set of credentials, or category of entities and activities.
     *  @property commonConditions
     *  @type ConditionManifest
     */
    prototype.commonConditions = null;
    /**
     *  http://purl.org/ctdl/terms/commonCosts
     *  Set of costs maintained at an organizational or sub-organizational level, which apply to this credential, assessment, or learning opportunity.
     *  @property commonCosts
     *  @type CostManifest
     */
    prototype.commonCosts = null;
    /**
     *  http://purl.org/ctdl/terms/corequisite
     *  Credentials that must be pursued concurrently.
     *  Includes dual (double) degrees that cannot be earned independently of each other.
     *  @property corequisite
     *  @type ConditionProfile
     */
    prototype.corequisite = null;
    /**
     *  http://purl.org/ctdl/terms/creditHourType
     *  Type of unit of time corresponding to type of credit such as semester hours, quarter hours, clock hours, or hours of participation.
     *  @property creditHourType
     *  @type langString
     */
    prototype.creditHourType = null;
    /**
     *  http://purl.org/ctdl/terms/creditHourValue
     *  Number of credit hours awarded for successful completion of a learning opportunity or assessment.
     *  @property creditHourValue
     *  @type float
     */
    prototype.creditHourValue = null;
    /**
     *  http://purl.org/ctdl/terms/creditUnitType
     *  Type of credit associated with both degree and non-degree learning opportunities; select from an existing enumeration of such types.
     *  @property creditUnitType
     *  @type CredentialAlignmentObject
     */
    prototype.creditUnitType = null;
    /**
     *  http://purl.org/ctdl/terms/creditUnitTypeDescription
     *  Detailed description of credit unit type.
     *  @property creditUnitTypeDescription
     *  @type langString
     */
    prototype.creditUnitTypeDescription = null;
    /**
     *  http://purl.org/ctdl/terms/creditUnitValue
     *  Number of either credit units awarded for college credit or continuing education units for successful completion of the learning opportunity or assessment.
     *  @property creditUnitValue
     *  @type float
     */
    prototype.creditUnitValue = null;
    /**
     *  http://purl.org/ctdl/terms/ctid
     *  Globally unique Credential Transparency Identifier (CTID) by which the creator, owner or provider of a credential, learning opportunity competency, or assessment recognizes the entity in transactions with the external environment (e.g., in verifiable claims involving a credential).
     *  The CTID is the equivalent of a version identifier for the resource. Different versions of a resource are considered distinct expressions and each must be assigned its own CTID. Each version of a resource can have only one CTID assigned. However, a single version of a resource may have distinct identifier values for both the ctid property and the credentialId property. In such a case both identifiers will be recognized by the resource creator/owner/provider in transactions with the external environment.
     *  @property ctid
     *  @type string
     */
    prototype.ctid = null;
    /**
     *  http://purl.org/ctdl/terms/dateEffective
     *  Effective date of the content of a credential, assessment or learning opportunity.
     *  @property dateEffective
     *  @type date
     */
    prototype.dateEffective = null;
    /**
     *  http://purl.org/ctdl/terms/deliveryType
     *  Type of means by which a learning opportunity or assessment is delivered to credential seekers and by which they interact; select from an existing enumeration of such types.
     *  @property deliveryType
     *  @type CredentialAlignmentObject
     */
    prototype.deliveryType = null;
    /**
     *  http://purl.org/ctdl/terms/deliveryTypeDescription
     *  Detailed description of the delivery type of an assessment or learning opportunity.
     *  @property deliveryTypeDescription
     *  @type langString
     */
    prototype.deliveryTypeDescription = null;
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/entryCondition
     *  Prerequisites for entry into a credentialing program, a learning opportunity or an assessment including transcripts, records of previous experience, and lower-level learning opportunities.
     *  @property entryCondition
     *  @type ConditionProfile
     */
    prototype.entryCondition = null;
    /**
     *  http://purl.org/ctdl/terms/estimatedCost
     *  Estimated cost of a credential, learning opportunity or assessment.
     *  @property estimatedCost
     *  @type CostProfile
     */
    prototype.estimatedCost = null;
    /**
     *  http://purl.org/ctdl/terms/estimatedDuration
     *  Estimated time it will take to complete a credential, learning opportunity or assessment.
     *  @property estimatedDuration
     *  @type DurationProfile
     */
    prototype.estimatedDuration = null;
    /**
     *  http://purl.org/ctdl/terms/financialAssistance
     *  Entity that describes financial assistance for which this credential, assessment, or learning opportunity qualifies.
     *  Whether the financial aid in question is associated with a credential, an assessment, or a learning opportunity is dependent on context.
     *  @property financialAssistance
     *  @type FinancialAssistanceProfile
     */
    prototype.financialAssistance = null;
    /**
     *  http://purl.org/ctdl/terms/hasPart
     *  Indicates a separately identifiable and independently useful component of the entity.
     *  Such partitive components can frequently be used in more than one context.
     *  @property hasPart
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.hasPart = null;
    /**
     *  http://purl.org/ctdl/terms/inLanguage
     *  The primary language or languages of the entity, even if it makes use of other languages; e.g., a course offered in English to teach Spanish would have an inLanguage of English, while a credential in Quebec could have an inLanguage of both French and English.
     *  @property inLanguage
     *  @type language
     */
    prototype.inLanguage = null;
    /**
     *  http://purl.org/ctdl/terms/instructionalProgramType
     *  Type of instructional program; select from an existing enumeration of such types.
     *  @property instructionalProgramType
     *  @type CredentialAlignmentObject
     */
    prototype.instructionalProgramType = null;
    /**
     *  http://purl.org/ctdl/terms/isAdvancedStandingFor
     *  This credential, assessment, or learning opportunity reduces the time or cost required to earn or complete the referenced credential, assessment, or learning opportunity.
     *  @property isAdvancedStandingFor
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isAdvancedStandingFor = null;
    /**
     *  http://purl.org/ctdl/terms/isPartOf
     *  Indicates another entity of which this entity is a component.
     *  Covers partitive notions such as "embedded".
     *  @property isPartOf
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isPartOf = null;
    /**
     *  http://purl.org/ctdl/terms/isPreparationFor
     *  This credential, assessment, or learning opportunity provides preparation for the credential, assessment, or learning opportunity being referenced.
     *  @property isPreparationFor
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isPreparationFor = null;
    /**
     *  http://purl.org/ctdl/terms/isRecommendedFor
     *  It is recommended to earn or complete this credential, assessment, or learning opportunity before attempting to earn or complete the referenced credential, assessment, or learning opportunity.
     *  @property isRecommendedFor
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isRecommendedFor = null;
    /**
     *  http://purl.org/ctdl/terms/isRequiredFor
     *  This credential, assessment, or learning opportunity must be earned or completed prior to attempting to earn or complete the referenced credential, assessment, or learning opportunity.
     *  @property isRequiredFor
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isRequiredFor = null;
    /**
     *  http://purl.org/ctdl/terms/jurisdiction
     *  Geographic or political region in which the credential is formally applicable or an organization has authority to act.
     *  @property jurisdiction
     *  @type JurisdictionProfile
     */
    prototype.jurisdiction = null;
    /**
     *  http://purl.org/ctdl/terms/keyword
     *  Keyword or key phrase describing relevant aspects of an entity.
     *  @property keyword
     *  @type langString
     */
    prototype.keyword = null;
    /**
     *  http://purl.org/ctdl/terms/learningMethodType
     *  Types of methods used to conduct the learning opportunity; select from an existing enumeration of such types.
     *  @property learningMethodType
     *  @type CredentialAlignmentObject
     */
    prototype.learningMethodType = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdl/terms/offeredBy
     *  Agent that offers the credential, learning opportunity or assessment.
     *  @property offeredBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.offeredBy = null;
    /**
     *  http://purl.org/ctdl/terms/offeredIn
     *  Region or political jurisdiction such as a state, province or locale where the credential, learning resource or assessment is offered.
     *  @property offeredIn
     *  @type JurisdictionProfile
     */
    prototype.offeredIn = null;
    /**
     *  http://purl.org/ctdl/terms/ownedBy
     *  Organization or person with an enforceable claim or legal title to the credential, assessment or learning opportunity.
     *  Agent includes credentialing organizations, quality assurance organizations and persons. It does not not include credential holders.
     *  @property ownedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.ownedBy = null;
    /**
     *  http://purl.org/ctdl/terms/preparationFrom
     *  Another credential, learning opportunity or assessment that provides preparation for this credential, learning opportunity or assessment.
     *  @property preparationFrom
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.preparationFrom = null;
    /**
     *  http://purl.org/ctdl/terms/recognizedBy
     *  Agent that acknowledges the validity of the credential, learning opportunity of assessment.
     *  @property recognizedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.recognizedBy = null;
    /**
     *  http://purl.org/ctdl/terms/recognizedIn
     *  Region or political jurisdiction such as a state, province or locale in which the credential, learning resource, or assessment has been publicly recommended, acknowledged or endorsed.
     *  @property recognizedIn
     *  @type JurisdictionProfile
     */
    prototype.recognizedIn = null;
    /**
     *  http://purl.org/ctdl/terms/recommends
     *  Recommended credential, learning opportunity or assessment.
     *  @property recommends
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Competency | ConditionProfile | Credential | CredentialAlignmentObject | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.recommends = null;
    /**
     *  http://purl.org/ctdl/terms/region
     *  Entity that describes the longitude, latitude and other location details of an area.
     *  @property region
     *  @type Place
     */
    prototype.region = null;
    /**
     *  http://purl.org/ctdl/terms/regulatedBy
     *  Quality assurance organization that enforces the legal requirements of the credential, learning resource or assessment.
     *  @property regulatedBy
     *  @type QACredentialOrganization
     */
    prototype.regulatedBy = null;
    /**
     *  http://purl.org/ctdl/terms/regulatedIn
     *  Region or political jurisdiction such as a state, province or locale in which the credential, learning opportunity or resource is regulated.
     *  @property regulatedIn
     *  @type JurisdictionProfile
     */
    prototype.regulatedIn = null;
    /**
     *  http://purl.org/ctdl/terms/requires
     *  Requirement or set of requirements for this credential, learning opportunity, or assessment.
     *  @property requires
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Competency | ConditionProfile | Credential | CredentialAlignmentObject | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.requires = null;
    /**
     *  http://purl.org/ctdl/terms/subject
     *  Words or brief phrases describing the topicality of the entity; select subject terms from an existing enumeration of such terms.
     *  @property subject
     *  @type CredentialAlignmentObject
     */
    prototype.subject = null;
    /**
     *  http://purl.org/ctdl/terms/subjectWebpage
     *  The webpage that describes this entity.
     *  The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
     *  @property subjectWebpage
     *  @type anyURI
     */
    prototype.subjectWebpage = null;
    /**
     *  http://purl.org/ctdl/terms/targetAssessment
     *  Assessment that provides direct, indirect, formative or summative evaluation or estimation of the nature, ability, or quality for an entity.
     *  @property targetAssessment
     *  @type Assessment | AssessmentProfile
     */
    prototype.targetAssessment = null;
    /**
     *  http://purl.org/ctdl/terms/targetLearningOpportunity
     *  Learning opportunity that is the focus of a condition, process or another learning opportunity.
     *  @property targetLearningOpportunity
     *  @type LearningOpportunity | LearningOpportunityProfile
     */
    prototype.targetLearningOpportunity = null;
    /**
     *  http://purl.org/ctdl/terms/targetLearningResource
     *  Learning object or resource that is used as part of an learning activity.
     *  Examples include a textbook or lesson plan that describes or records the educational activity (e.g. an audio- or video-recording of a lesson).
     *  @property targetLearningResource
     *  @type LearningResource
     */
    prototype.targetLearningResource = null;
    /**
     *  http://purl.org/ctdl/terms/teaches
     *  Competency that the learning opportunity is intended to teach.
     *  @property teaches
     *  @type Competency | CredentialAlignmentObject
     */
    prototype.teaches = null;
    /**
     *  http://purl.org/ctdl/terms/verificationMethodDescription
     *  Textual description of the methods used to evaluate an assessment, learning opportunity, process or verificaiton service for validity or reliability.
     *  @property verificationMethodDescription
     *  @type langString
     */
    prototype.verificationMethodDescription = null;
    /**
     *  http://purl.org/ctdl/terms/versionIdentifier
     *  Alphanumeric identifier of the version of the credential that is unique within the organizational context of its owner.
     *  The credential version captured here is any local identifier used by the credential owner to identify the version of the credential in the its local system.
     *  @property versionIdentifier
     *  @type IdentifierValue
     */
    prototype.versionIdentifier = null;
}, {accreditedBy: "QACredentialOrganization", accreditedIn: "JurisdictionProfile", advancedStandingFrom: "Object", approvedBy: "Object", approvedIn: "JurisdictionProfile", audienceType: "CredentialAlignmentObject", availableAt: "Place", commonConditions: "ConditionManifest", commonCosts: "CostManifest", corequisite: "ConditionProfile", creditUnitType: "CredentialAlignmentObject", deliveryType: "CredentialAlignmentObject", entryCondition: "ConditionProfile", estimatedCost: "CostProfile", estimatedDuration: "DurationProfile", financialAssistance: "FinancialAssistanceProfile", hasPart: "Object", instructionalProgramType: "CredentialAlignmentObject", isAdvancedStandingFor: "Object", isPartOf: "Object", isPreparationFor: "Object", isRecommendedFor: "Object", isRequiredFor: "Object", jurisdiction: "JurisdictionProfile", learningMethodType: "CredentialAlignmentObject", offeredBy: "Object", offeredIn: "JurisdictionProfile", ownedBy: "Object", preparationFrom: "Object", recognizedBy: "Object", recognizedIn: "JurisdictionProfile", recommends: "Object", region: "Place", regulatedBy: "QACredentialOrganization", regulatedIn: "JurisdictionProfile", requires: "Object", subject: "CredentialAlignmentObject", targetAssessment: "Object", targetLearningOpportunity: "Object", targetLearningResource: "LearningResource", teaches: "Object", versionIdentifier: "IdentifierValue", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
