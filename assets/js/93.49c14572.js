(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{398:function(e,t,r){"use strict";r.r(t);var a=r(43),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/key-vault?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Key Vault Documentation"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"taking-a-peek-at-azure-key-vault-part-1-of-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#taking-a-peek-at-azure-key-vault-part-1-of-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Taking a peek at Azure Key Vault Part 1 of 2")]),e._v(" "),r("p",[r("router-link",{attrs:{to:"./tip180.html"}},[e._v("Part 1 - this post")]),e._v(" "),r("router-link",{attrs:{to:"./tip181.html"}},[e._v("Part 2")])],1),e._v(" "),r("p",[e._v("One of the more vexing problems for developers is securing access to other services used by their applications. Databases and other restricted resources need authentication, and your apps need to provide that, but how? Passwords within your code? (Un)encrypted configuration files? Certificate stores? Hardware? And who safeguards and manages these resources?")]),e._v(" "),r("p",[e._v("Addressing these concerns is the primary objective of "),r("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Key Vault"),r("OutboundLink")],1),e._v(", a globally available service to store and manage three types of assets:")]),e._v(" "),r("ul",[r("li",[e._v("Secrets - sensitive strings like passwords and database connection strings. You might store your application's database password as a secret, for instance.")]),e._v(" "),r("li",[e._v("Encryption keys - RSA or Elliptic Curve keys that you would use for cryptographic operations such as encrypting application data for transit or storage.")]),e._v(" "),r("li",[e._v("Certificates - X.509 certificates that you may provision through Azure Key Vault or via other providers like DigiCert.")])]),e._v(" "),r("p",[e._v("In this post, you're going to see how to create and manage a secret, but keys work in much the same way. Certificates are a little more complex, and in fact themselves used keys and secrets. Check out "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/key-vault/certificate-scenarios?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Get started with Key Vault Certificates"),r("OutboundLink")],1),e._v(" for more information specifically on certificates.")]),e._v(" "),r("h4",{attrs:{id:"creating-a-key-vault-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-key-vault-account","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a Key Vault Account")]),e._v(" "),r("p",[e._v("Let's start by creating a new Key Vault service in the Azure portal. In the Create Key Vault blade (below), provide a unique name for your vault (which, as with most services, becomes an endpoint for invoking the service) and pick (or create) a resource group and a pricing tier. There are currently two tiers, Standard and Premium; the latter supports keys protected by a hardware security module (HSM). Use the standard option for this exercise.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/create-kv.png")}}),e._v(" "),r("p",[e._v("Access to the Key Vault is managed via policies to which principals (like users and applications) can be assigned. By default, the user creating the vault is granted all permissions to keys, secrets, and certificates, but in practice you will grant more detailed policies to specific principals.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/create-kv-policy.png")}}),e._v(" "),r("p",[e._v("Indeed, across the three entities (keys, secrets, and certificates), there are 40 permissions that can be individually granted, thus supporting the "),r("a",{attrs:{href:"https://docs.microsoft.com/windows-server/identity/ad-ds/plan/security-best-practices/implementing-least-privilege-administrative-models?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("principle of least privilege"),r("OutboundLink")],1),e._v(".  For instance, a web API that is accessing SQL Server might have GET permission on the secrets store, but only members of the security team would have SET permission to modify the database password. That's a simplistic example, so "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/key-vault/key-vault-secure-your-key-vault#example?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here's another scenario"),r("OutboundLink")],1),e._v(" involving developers, the security team, and even auditors.")]),e._v(" "),r("h4",{attrs:{id:"adding-a-secret"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-secret","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding a Secret")]),e._v(" "),r("p",[e._v("On the left sidebar menu of the Key Vault blade in the Azure portal, you can easily create or import a secret, key, or certificate. Since we're just interested in a secret now, we simply provide a name-value pair and options to manage the window of accessibility to that secret.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/create-secret.png")}}),e._v(" "),r("p",[e._v("Once the secret is created, you'll notice that there is a bit more depth to this than a simple key-value pair. For each secret, a versioning history is automatically maintained, and through the Secret Identifier URI you can access any version of that secret. This provides a bit of an audit trail and can help implement policies to forbid reuse of actual or derived values of previous secrets.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/kv-history.png")}}),e._v(" "),r("p",[e._v("Although the Azure portal is a convenient visual approach to interact with Key Vault, for most scenarios you will want to have a repeatable and isolated process for managing Key Vault. Supporting that are the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/key-vault/quick-create-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/key-vault/quick-create-powershell?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell cmdlets"),r("OutboundLink")],1),e._v(" as well as "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/resource-manager-keyvault-parameter?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("integration with Azure Resource Manager (ARM) templates"),r("OutboundLink")],1),e._v(".\nFrom the perspective of consuming secrets (as well as keys and certificates) from Key Vault within your applications, SDKs and libraries are available in "),r("a",{attrs:{href:"https://docs.microsoft.com/dotnet/api/microsoft.azure.keyvault?view=azure-dotnet?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://docs.microsoft.com/java/api/overview/azure/keyvault?view=azure-java-stable?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://docs.microsoft.com/javascript/api/overview/azure/key-vault?view=azure-node-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),e._v(", and "),r("a",{attrs:{href:"https://docs.microsoft.com/python/api/overview/azure/key-vault?view=azure-python?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),r("OutboundLink")],1),e._v(", and, of course,\nyou can use the "),r("a",{attrs:{href:"https://docs.microsoft.com/rest/api/keyvault/",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API"),r("OutboundLink")],1),e._v(" from any programming environment that supports HTTP. We'll look at a small sample using the .NET SDK in the "),r("router-link",{attrs:{to:"./tip181.html"}},[e._v("next installment")]),e._v(".")],1)])},[],!1,null,null,null);t.default=s.exports}}]);