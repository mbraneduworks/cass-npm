/**
 *  Schema.org/JobPosting
 *  A listing that describes a job opening in a certain organization.
 * 
 *  @author schema.org
 *  @class JobPosting
 *  @module org.schema
 *  @extends Intangible
 */
var JobPosting = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "JobPosting";
};
JobPosting = stjs.extend(JobPosting, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/benefits
     *  Description of benefits associated with the job.
     * 
     *  @property benefits
     *  @type Text
     */
    prototype.benefits = null;
    /**
     *  Schema.org/qualifications
     *  Specific qualifications required for this role.
     * 
     *  @property qualifications
     *  @type Text
     */
    prototype.qualifications = null;
    /**
     *  Schema.org/incentiveCompensation
     *  Description of bonus and commission compensation aspects of the job.
     * 
     *  @property incentiveCompensation
     *  @type Text
     */
    prototype.incentiveCompensation = null;
    /**
     *  Schema.org/workHours
     *  The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).
     * 
     *  @property workHours
     *  @type Text
     */
    prototype.workHours = null;
    /**
     *  Schema.org/salaryCurrency
     *  The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) ) used for the main salary information in this job posting or for this employee.
     * 
     *  @property salaryCurrency
     *  @type Text
     */
    prototype.salaryCurrency = null;
    /**
     *  Schema.org/jobBenefits
     *  Description of benefits associated with the job.
     * 
     *  @property jobBenefits
     *  @type Text
     */
    prototype.jobBenefits = null;
    /**
     *  Schema.org/datePosted
     *  Publication date for the job posting.
     * 
     *  @property datePosted
     *  @type Date
     */
    prototype.datePosted = null;
    /**
     *  Schema.org/skills
     *  Skills required to fulfill this role.
     * 
     *  @property skills
     *  @type Text
     */
    prototype.skills = null;
    /**
     *  Schema.org/incentives
     *  Description of bonus and commission compensation aspects of the job.
     * 
     *  @property incentives
     *  @type Text
     */
    prototype.incentives = null;
    /**
     *  Schema.org/educationRequirements
     *  Educational background needed for the position.
     * 
     *  @property educationRequirements
     *  @type Text
     */
    prototype.educationRequirements = null;
    /**
     *  Schema.org/responsibilities
     *  Responsibilities associated with this role.
     * 
     *  @property responsibilities
     *  @type Text
     */
    prototype.responsibilities = null;
    /**
     *  Schema.org/baseSalary
     *  The base salary of the job or of an employee in an EmployeeRole.
     * 
     *  @property baseSalary
     *  @type MonetaryAmount
     */
    prototype.baseSalary = null;
    /**
     *  Schema.org/validThrough
     *  The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     * 
     *  @property validThrough
     *  @type DateTime
     */
    prototype.validThrough = null;
    /**
     *  Schema.org/hiringOrganization
     *  Organization offering the job position.
     * 
     *  @property hiringOrganization
     *  @type Organization
     */
    prototype.hiringOrganization = null;
    /**
     *  Schema.org/specialCommitments
     *  Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.
     * 
     *  @property specialCommitments
     *  @type Text
     */
    prototype.specialCommitments = null;
    /**
     *  Schema.org/occupationalCategory
     *  Category or categories describing the job. Use BLS O*NET-SOC taxonomy: http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and formal code, with the property repeated for each applicable value.
     * 
     *  @property occupationalCategory
     *  @type Text
     */
    prototype.occupationalCategory = null;
    /**
     *  Schema.org/experienceRequirements
     *  Description of skills and experience needed for the position.
     * 
     *  @property experienceRequirements
     *  @type Text
     */
    prototype.experienceRequirements = null;
    /**
     *  Schema.org/employmentType
     *  Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).
     * 
     *  @property employmentType
     *  @type Text
     */
    prototype.employmentType = null;
    /**
     *  Schema.org/jobLocation
     *  A (typically single) geographic location associated with the job position.
     * 
     *  @property jobLocation
     *  @type Place
     */
    prototype.jobLocation = null;
    /**
     *  Schema.org/title
     *  The title of the job.
     * 
     *  @property title
     *  @type Text
     */
    prototype.title = null;
    /**
     *  Schema.org/industry
     *  The industry associated with the job position.
     * 
     *  @property industry
     *  @type Text
     */
    prototype.industry = null;
}, {baseSalary: "MonetaryAmount", hiringOrganization: "Organization", jobLocation: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});